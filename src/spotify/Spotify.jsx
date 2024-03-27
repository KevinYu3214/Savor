// Assuming these are defined in your environment
const localStorage = window.localStorage;
const fetch = window.fetch;

const clientId = '35031be6070048458899436547c2b842'; // Your clientId
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
// No changes required in generateCodeChallenge and generateSpotifyAuthRequest functions

// Exchanges the authorization code for an access token
async function getToken(code) {
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
  console.log('Token Data:', tokenData); // Debugging to verify token data includes a refresh token
  saveTokenData(tokenData);
  return tokenData;
}

// Saves token data and calculates the expiry time
function saveTokenData(tokenData) {
  const now = new Date();
  const expiresIn = tokenData.expires_in * 1000; // Convert to milliseconds
  const expiryTime = new Date(now.getTime() + expiresIn);

  localStorage.setItem('access_token', tokenData.access_token);
  localStorage.setItem('expires_at', expiryTime.toISOString());
  if (tokenData.refresh_token) {
    localStorage.setItem('refresh_token', tokenData.refresh_token);
  }
}

// Refreshes the access token using the refresh token
async function refreshToken() {
  const refreshToken = localStorage.getItem('refresh_token');
  if (!refreshToken) {
    console.error('No refresh token available');
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
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const tokenData = await response.json();
  saveTokenData(tokenData);
  return tokenData.access_token;
}

// Checks if the access token is expired and refreshes it if necessary
async function ensureValidToken() {
  const expiresAt = localStorage.getItem('expires_at');
  if (!expiresAt || new Date() > new Date(expiresAt)) {
    await refreshToken();
  }
  return localStorage.getItem('access_token');
}

// Function to fetch user's top tracks
async function fetchTopTracks(accessToken) {
  const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
      },
  });

  if (!response.ok) {
      throw new Error(`Failed to fetch top tracks: ${response.status} - ${response.statusText}`);
  }

  return await response.json();
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


export { generateSpotifyAuthRequest, getToken, refreshToken, ensureValidToken, fetchTopTracks, fetchUserProfile };
