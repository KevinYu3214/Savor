import React from "react";
import "../components/Song.scss";
import playButton from "../assets/play-button-6.svg";

const Song = ({ result }) => {
  return (
    <div className="songContainer">
      <div className="songInfo">
        <img src="http://placehold.it/" className="songImage" />

        <img src={playButton} className="playButton" />
        <div className="songText">
          <div className="songTitle">{result.name}</div>
          <div className="songAlbum">Song Album</div>
        </div>
      </div>

      <div className="artistInfo">
        <img src="http://placehold.it/" className="artistImage" />
        <div className="artistName"> Artist Name</div>
      </div>
    </div>
  );
};

export default Song;
