import Header from "../components/Header";
import MusicList from "../components/MusicList";

const Playlists = () => {  

    return (
      <>
        <Header />
          <mainCompareText>
            Playlists for <span>you</span>
          </mainCompareText> 
          <MusicList />
      </>
    );
  }


  export default Playlists;