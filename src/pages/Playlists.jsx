import { useContext } from "react";
import Header from "../components/Header";
import MusicList from "../components/MusicList";
import {ThemeContext} from "../contexts/ThemeContext";

const Playlists = () => {  
     const {theme} = useContext(ThemeContext);
    return (
      <body className={theme === 'light' ? 'light' : 'dark'}>    
          <h1>Music For <span>You</span></h1>
          <MusicList />
          <h1>Top Music<span>Today</span></h1>
          <MusicList />
      </body>
    );
  }


  export default Playlists;