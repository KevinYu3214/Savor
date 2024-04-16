import { useContext, useState } from "react";
import MusicList from "../components/MusicList";
import { ThemeContext } from "../contexts/ThemeContext";
import PlaylistComponent from "../components/PlaylistComponent";
import workout from "../assets/playlist icons/workout.jpg";
import "../global_styles/Playlist.scss";

const Playlists = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setIsShown(!isShown);
  };
  const { theme } = useContext(ThemeContext);
  return (
    <body className={theme === "light" ? "light" : "dark"}>
      <div className="browsePL">
        <img className="workoutPL" src={workout} onClick={handleClick} />
      </div>
      {isShown && (
        <div className="overlayPL" onClick={handleClick}>
          <div onClick={(e) => e.stopPropagation()}>
            {/*<PlaylistComponent></PlaylistComponent>*/}
          </div>
        </div>
      )}
      <h1>
        Top Music<span>Today</span>
      </h1>
      {/*<PlaylistComponent />*/}
    </body>
  );
};

export default Playlists;
