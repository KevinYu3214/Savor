import React from 'react'
import CompareButton from './CompareButton';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/compare";
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

const Login = () => {
  return (
    <a href={SPOTIFY_AUTH_REQUEST} >
     <CompareButton text={"Spotify"} />
    </a>    
    )
    
}

export default Login