import React from "react";
import "../components/Song.scss";
import playButton from "../assets/play-button-6.svg";

const Song = () => {
  return (
    <div className="songContainer">
      <div className="songInfo">
        <img src="http://placehold.it/" className="songImage" />
        <img src={playButton} className="playButton" />
        <div className="songText">
          <div className="songTitle">Song Title</div>
          <div className="songAlbum">Song Album</div>
        </div>
      </div>

      <img src="http://placehold.it/" className="artistImage" />
    </div>
  );
};

export default Song;
