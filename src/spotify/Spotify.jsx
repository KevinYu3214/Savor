const CLIENT_ID = "35031be6070048458899436547c2b842"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:5173/stats";
const SCOPES = [
    "user-read-private",
    "streaming",
    "user-top-read",
    'user-read-email',
    "playlist-read-private",
    "playlist-read-collaborative",
];

const SPACE_DELIMITER = "%20";
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
const SPOTIFY_AUTH_REQUEST = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=code&show_dialog=true`;

const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const codeVerifier = generateRandomString(64);
window.localStorage.setItem('code_verifier', codeVerifier);

const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);

const getToken = async code => {

    // stored in the previous step
    let codeVerifier = localStorage.getItem('code_verifier');
  
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URL_AFTER_LOGIN,
        code_verifier: codeVerifier,
      }),
    }
  
    const body = await fetch('https://accounts.spotify.com/api/token', payload);
    const response = await body.json();
  
    localStorage.setItem('access_token', response.access_token);
};

export { SPOTIFY_AUTH_REQUEST, getToken };