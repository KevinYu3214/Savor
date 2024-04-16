import { db } from "../firebase/firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Assuming these are defined in your environment
const localStorage = window.localStorage;
const fetch = window.fetch;

export const clientId = '35031be6070048458899436547c2b842'; // Your clientId
export const clientSecret = 'f6db2bf108264ec88a61a0a3aefd49e3'
const redirectUrl = 'http://localhost:5173/account'; // Your redirect URL - must be localhost URL and/or HTTPS
const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token"; // Token endpoint for exchanging codes and refreshing tokens
const scope = 'user-read-private user-read-email user-top-read';

// Generates a code verifier and challenge for PKCE
async function generateCodeChallenge() {
  const encoder = new TextEncoder();
  const crypto = window.crypto;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  const codeVerifier = Array.from(randomValues, (x) => possible[x % possible.length]).join('');
  
  const data = encoder.encode(codeVerifier);
  const hashed = await crypto.subtle.digest('SHA-256', data);
  const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hashed)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
  
  localStorage.setItem('code_verifier', codeVerifier);
  return codeChallenge;
}

// Generates the Spotify authorization request URL
async function generateSpotifyAuthRequest() {
  const codeChallenge = await generateCodeChallenge();
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUrl,
    scope: scope,
    response_type: 'code',
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    show_dialog: 'true'
  });
  
  return `${authorizationEndpoint}?${params}`;
}

// Exchanges the authorization code for an access token
// occurs only first time 
async function getTokenForFirstTime(code) {
  console.log('getToken called with code:', code);
  if (!code) {
    throw new Error('Authorization code is required.');
  }
  const codeVerifier = localStorage.getItem('code_verifier');
  if (!codeVerifier) {
    throw new Error('Code verifier is missing. PKCE verification cannot proceed.');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUrl,
    code_verifier: codeVerifier,
  });

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    console.error('Token exchange error:', errorResponse);
    throw new Error(`HTTP error during token exchange: ${response.status}`);
  }

  const tokenData = await response.json();
  return tokenData;
}

// get access token from Firestore  
async function getAccessToken(userId) {
  try {
      const userDoc = await getDoc(doc(db, "User", userId));
      if (userDoc.exists()) {
          const spotifyTokens = userDoc.data().spotifyTokens;
          if (spotifyTokens && spotifyTokens.accessToken) {
              return spotifyTokens.accessToken;
          }
      }
      return null;
  } catch (error) {
      console.error('Error fetching access token:', error);
      return null;
  }
}

// get spotify tokens from firebase
async function getSpotifyTokens(userId) {
  try {
    const userDoc = await getDoc(doc(db, "User", userId));
    if (userDoc.exists()) {
      const spotifyTokens = userDoc.data().spotifyTokens || null;
      console.log('Spotify tokens retrieved from Firestore:', spotifyTokens);
      return spotifyTokens;
    }
    console.log('No Spotify tokens found in Firestore for user:', userId);
    return null;
  } catch (error) {
    console.error('Error retrieving Spotify tokens:', error);
    throw new Error('Failed to retrieve Spotify tokens');
  }
}

async function refreshToken(userId) {
  const userRef = doc(db, "User", userId);
  const userDoc = await getDoc(userRef);
  if (!userDoc.exists()) {
    console.error('User document does not exist in Firestore');
    throw new Error('User not found');
  }
  const refreshToken = userDoc.data().spotifyTokens.refreshToken;

  if (!refreshToken) {
    console.error('No refresh token available in Firestore for user:', userId);
    throw new Error('No refresh token available');
  }

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    console.error('Failed to refresh token', response.statusText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const tokenData = await response.json();
  // Assume tokenData contains access_token and possibly a new refresh_token

  // Save the refreshed token data back to Firestore
  await updateDoc(userRef, {
    "spotifyTokens.accessToken": tokenData.access_token,
    "spotifyTokens.expiresAt": new Date().getTime() + (tokenData.expires_in * 1000), // Save expiration time
    // Update the refresh token if a new one was provided
    ...(tokenData.refresh_token && {"spotifyTokens.refreshToken": tokenData.refresh_token}),
  });

  return tokenData.access_token;
}

// ensure token not expired
async function ensureValidToken() {
  console.log("Checking if the access token is valid");
  try {
    const userId = getCurrentUserId(); // Assuming you have a function to get the current user's ID
    // Retrieve access token and expiration time from Firestore
    const spotifyTokens = await getSpotifyTokens(userId);
    console.log("Checking if the access token is valid");
    if (!spotifyTokens || !spotifyTokens.accessToken || !spotifyTokens.expiresAt) {
      console.log("No valid access token found. Refreshing token...");
      await refreshSpotifyToken(userId);
    } else {
      const { accessToken, expiresAt } = spotifyTokens;
      const now = new Date().getTime();
      const expiresAtDate = new Date(expiresAt.seconds * 1000 + expiresAt.nanoseconds / 1000000);

      if (now > expiresAtDate.getTime()) {
        console.log("Access token is expired. Refreshing token...");
        await refreshSpotifyToken(userId);
      } else {
        console.log("Access token is valid");
        return accessToken;
      }
    }
  } catch (error) {
    console.error("Error checking or refreshing access token:", error.message);
    throw new Error("Failed to ensure valid token");
  }
}



async function search(input, setResults) {
  console.log("Checking if the access token is stored in Firestore");
  const userId = getCurrentUserId(); // Assuming you have a function to get the current user's ID
  const accessToken = await getAccessToken(userId);
  
  if (!accessToken) {
      console.error("Access token not found in Firestore");
      return;
  }

  const searchParameters = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
      }
  };

  try {
      const response = await fetch('https://api.spotify.com/v1/search?q=' + input + '&type=track', searchParameters);
      if (!response.ok) {
          throw new Error(`Failed to search for tracks: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data.tracks.items);
  } catch (error) {
      console.error('Error searching for tracks:', error);
  }
}

// Function to fetch the current user's Spotify profile
async function fetchUserProfile(accessToken) {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user profile: ${response.status} - ${response.statusText}`);
  }

  const userData = await response.json();
  return userData;
}


async function refreshSpotifyToken(userId) {
  // Retrieve the stored refresh token from Firestore
  const userDocRef = doc(db, "User", userId);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
      console.log("No user document found!");
      return;
  }

  const spotifyTokens = userDocSnap.data().spotifyTokens;
  if (!spotifyTokens || !spotifyTokens.refreshToken) {
      console.log("No refresh token available");
      return;
  }

  // Prepare the request for refreshing the token
  const params = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: spotifyTokens.refreshToken
  });

  const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${encodeClientCredentials(clientId, clientSecret)}`
      },
      body: params
  });

  const data = await response.json();

  if (!response.ok) {
      console.error("Failed to refresh token:", data);
      throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Update the Firestore document with the new tokens and expiration
  await updateDoc(userDocRef, {
      "spotifyTokens.accessToken": data.access_token,
      "spotifyTokens.expiresAt": new Date().getTime() + (data.expires_in * 1000), // Save expiration time
      // Update the refresh token if a new one was provided
      ...(data.refresh_token && { "spotifyTokens.refreshToken": data.refresh_token }),
  });

  return {
      accessToken: data.access_token,
      expiresIn: data.expires_in
  };
}

// store tokens in Firestore
async function storeSpotifyTokens(userId, accessToken, refreshToken, expiresIn) {
  try {
    // Check if any required token data is missing
    if (!userId || !accessToken || !refreshToken || !expiresIn) {
      throw new Error("Missing required token data");
    }

    const userRef = doc(db, "User", userId);
    const tokenData = {
      accessToken,
      refreshToken,
      expiresAt: new Date().getTime() + expiresIn * 1000, // Calculate the expiry timestamp
    };
    await setDoc(userRef, { spotifyTokens: tokenData }, { merge: true });
    console.log('Spotify tokens stored in Firestore:', tokenData);
  } catch (error) {
    console.error("Error storing Spotify tokens:", error);
    throw new Error("Failed to store Spotify tokens");
  }
}


async function suggestPlaylist(token, seedTracks) {
  try {
      const { danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence } = await fetchAndCalculateAverageFeatures(seedTracks, token);
      const response = await fetch(`https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${seedTracks.join(',')}&target_danceability=${danceability}&target_energy=${energy}&target_loudness=${loudness}&target_speechiness=${speechiness}&target_acousticness=${acousticness}&target_instrumentalness=${instrumentalness}&target_liveness=${liveness}&target_valence=${valence}`, {
          headers: {
              'Authorization': `Bearer ${token}`,
          },
      });

      if (!response.ok) {
          throw new Error(`Failed to fetch recommendations: ${response.status} - ${response.statusText}`);
      }

      const { tracks } = await response.json();
      return tracks;
  } catch (error) {
      throw new Error(`Failed to fetch recommendations: ${error.message}`);
  }
}

async function fetchAndCalculateAverageFeatures(seedTracks, accessToken) {
  const response = await fetch(`https://api.spotify.com/v1/audio-features/?ids=${seedTracks.join(',')}`, {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
      },
  });

  if (!response.ok) {
      throw new Error(`Failed to fetch audio features: ${response.status} - ${response.statusText}`);
  }

  const { audio_features } = await response.json();

  const sum = arr => arr.reduce((acc, val) => acc + val, 0);
  const average = arr => sum(arr) / arr.length;

  return {
      danceability: average(audio_features.map(feature => feature.danceability)),
      energy: average(audio_features.map(feature => feature.energy)),
      loudness: average(audio_features.map(feature => feature.loudness)),
      speechiness: average(audio_features.map(feature => feature.speechiness)),
      acousticness: average(audio_features.map(feature => feature.acousticness)),
      instrumentalness: average(audio_features.map(feature => feature.instrumentalness)),
      liveness: average(audio_features.map(feature => feature.liveness)),
      valence: average(audio_features.map(feature => feature.valence)),
  };
}
// Function to fetch the current user's top tracks
async function fetchTopTracks(token) {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch top tracks: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch top tracks: ${error.message}`);
  }
}

async function getCurrentUserId() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
      return user.uid;
  } else {
      return null;
  }
}

async function isConnectedToSpotify() {
  try {
    const userId = await getCurrentUserId();
    if (!userId) {
          return false;
        }
    const userDoc = await getDoc(doc(db, "User", userId));
    if (userDoc.exists()) {
      const spotifyTokens = userDoc.data().spotifyTokens;
      // Check if spotifyTokens exist and accessToken is present
      if (spotifyTokens && spotifyTokens.accessToken) {
        return true; // User is connected to Spotify
      }
    }
    return false; // User is not connected to Spotify
  } catch (error) {
    console.error('Error fetching access token:', error);
    return false; // Assume user is not connected to Spotify in case of error
  }
}

export { getCurrentUserId, suggestPlaylist, fetchTopTracks, storeSpotifyTokens, refreshSpotifyToken, getSpotifyTokens, generateSpotifyAuthRequest, getTokenForFirstTime, refreshToken, ensureValidToken, fetchUserProfile, search, isConnectedToSpotify };