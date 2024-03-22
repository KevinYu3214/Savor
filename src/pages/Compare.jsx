import Header from "../components/Header";
import CompareButton from "../components/CustomButtons/CompareButton";
import { SPOTIFY_AUTH_REQUEST } from "../spotify/Spotify";

const Compare = () => {  

    return (
      <>
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