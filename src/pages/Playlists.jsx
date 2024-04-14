import { useContext } from "react";
import MusicList from "../components/MusicList";
import { ThemeContext } from "../contexts/ThemeContext";
import PlaylistComponent from "../components/PlaylistComponent";

const Playlists = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <body className={theme === "light" ? "light" : "dark"}>
      <h1>
        Music For <span>You</span>
      </h1>
      <MusicList />
      <h1>
        Top Music<span>Today</span>
      </h1>
      <PlaylistComponent />
    </body>
  );
};

export default Playlists;
