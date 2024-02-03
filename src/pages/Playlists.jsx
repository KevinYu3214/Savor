import Header from "../components/Header";
import MusicList from "../components/MusicList";

const Playlists = () => {  

    return (
      <body>
        <Header />
          <h1>Music For <span>You</span></h1>
          <MusicList />
          <h1>Top Music<span>Today</span></h1>
          <MusicList />
      </body>
    );
  }


  export default Playlists;