import Header from "../components/Header";
import CompareButton from "../components/CompareButton";

const CLIENT_ID = "f7edf86569454d63bed822956ad01312"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:5173/compare";
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


const Compare = () => {  

    return (
      <>
        <Header />
          <mainCompareText>
            Before we get into it... You need to <span>login</span>
          </mainCompareText> 
          <a href={SPOTIFY_AUTH_REQUEST} >
            <CompareButton text={"Spotify"} />
          </a>    

      </>
    );
  }


  export default Compare;