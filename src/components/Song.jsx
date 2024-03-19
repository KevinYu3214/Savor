import React, { Link } from "react";
import "../components/Song.scss";
import playButton from "../assets/play-button-6.svg";

const songClick = (songLink) => {
  console.log("song clicked");
  new Audio(songLink).play();
};
const Song = ({ result }) => {
  return (
    <div className="songContainer">
      <div className="songInfo">
        <div className="songImageContainer">
          <img src={result.album.images[1].url} className="songImage" />
          <button
            className="playButton"
            onClick={() => songClick(result.preview_url)}
          >
            <img src={playButton} />
          </button>
        </div>
        <div className="songText">
          <div className="songTitle">{result.name}</div>
          <div className="songAlbum">{result.album.name}</div>
        </div>
      </div>

      <div className="artistInfo">
        <img src={result.album.images[1].url} className="artistImage" />
        <div className="artistName"> {result.artists[0].name}</div>
      </div>
    </div>
  );
};

export default Song;
