import { db } from "../firebase/firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Assuming these are defined in your environment
const localStorage = window.localStorage;
const fetch = window.fetch;

export const clientId = '35031be6070048458899436547c2b842'; // Your clientId
export const clientSecret = 'f6db2bf108264ec88a61a0a3aefd49e3'
const redirectUrl = 'http://localhost:5173/stats'; // Your redirect URL - must be localhost URL and/or HTTPS
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
async function getToken(code, userId) {
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
  console.log('Token Data:', tokenData);
  await saveTokenData(tokenData, userId); // Pass userId to saveTokenData
  return tokenData;
}


async function getSpotifyTokens(userId) {
  try {
    const userDoc = await getDoc(doc(db, "User", userId));
    if (userDoc.exists()) {
      return userDoc.data().spotifyTokens || null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching Spotify tokens:", error);
    return null;
  }
}

// Saves token data and calculates the expiry time
async function saveTokenData(tokenData, userId) {
  const now = new Date();
  const expiresIn = tokenData.expires_in * 1000; // Convert to milliseconds
  const expiryTime = new Date(now.getTime() + expiresIn);

  localStorage.setItem('access_token', tokenData.access_token);
  localStorage.setItem('expires_at', expiryTime.toISOString());

  // Save the refresh token to Firestore if it exists
  if (tokenData.refresh_token) {
    console.log("Saving refresh token to Firestore")
    await storeSpotifyTokens(userId, tokenData.access_token, tokenData.refresh_token, tokenData.expires_in);
  }
}



async function refreshToken(userId) {
  // Retrieve the refresh token from Firestore instead of localStorage
  const userRef = doc(db, "User", userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    console.error('User document does not exist in Firestore');
    throw new Error('User not found');
  }

  const spotifyTokens = userDoc.data().spotifyTokens;

  if (!spotifyTokens || !spotifyTokens.refreshToken) {
    console.error('No refresh token available in Firestore for user:', userId);
    throw new Error('No refresh token available');
  }

  const refreshToken = spotifyTokens.refreshToken;

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

  // Save the refreshed token data back to Firestore
  await updateDoc(userRef, {
    "spotifyTokens.accessToken": tokenData.access_token,
    "spotifyTokens.expiresAt": new Date().getTime() + (tokenData.expires_in * 1000), // Save expiration time
    // Update the refresh token if a new one was provided
    ...(tokenData.refresh_token && {"spotifyTokens.refreshToken": tokenData.refresh_token}),
  });

  return tokenData.access_token;
}

// Checks if the access token is expired and refreshes it if necessary
async function ensureValidToken() {
  const userDocRef = doc(db, "User", userId);
  const expiresAt = localStorage.getItem('expires_at');
  if (!expiresAt || new Date() > new Date(expiresAt)) {
    await refreshToken(userId);
    ;
  }
  return localStorage.getItem('access_token');
}

async function search(input, setResults) {
    const accessToken = localStorage.getItem('access_token');
    // Get request using search to get the Artist ID
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }    

    // Get request with Artist ID grab all the tracks from that artist
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + input + '&type=track', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data.tracks.items);
        setResults(data.tracks.items);
      });

    // Display albums to the user
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
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
    },
    body: params
  });

  if (!response.ok) {
    console.error("Failed to refresh token:", response.statusText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  // Update the Firestore document with the new tokens and expiration
  await storeSpotifyTokens(userId, data.access_token, data.refresh_token || undefined, data.expires_in);

  return {
    accessToken: data.access_token,
    expiresIn: data.expires_in
  };
}

async function storeSpotifyTokens(userId, accessToken, refreshToken, expiresIn) {
  const userDocRef = doc(db, "User", userId);
  const tokenData = {
    spotifyTokens: {
      accessToken,
      // Only include refreshToken in tokenData if it's defined
      refreshToken, // Include refresh token
      expiresAt: new Date().getTime() + expiresIn * 1000, // Calculate the expiry timestamp
    }
  };
  await setDoc(userDocRef, tokenData, { merge: true });
}


async function isConnectedToSpotify(userId) {
  const userDocRef = doc(db, "User", userId);
  const userDocSnap = await getDoc(userDocRef);
  return userDocSnap.exists() && userDocSnap.data().spotifyTokens;
}


export { storeSpotifyTokens, refreshSpotifyToken, getSpotifyTokens, generateSpotifyAuthRequest, getToken, refreshToken, ensureValidToken, fetchUserProfile, search, isConnectedToSpotify };