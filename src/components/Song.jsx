import React, { useState, useEffect } from "react";
import "../components/Song.scss";
import playButton from "../assets/play-button-6.svg";

const Song = ({ result }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio(result.preview_url);
    setAudio(newAudio);

    return () => {
      newAudio.pause();
      setAudio(null); // Clean up the audio object
    };
  }, [result.preview_url]);

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="songContainer">
      <div className="songInfo">
        <div className="songImageContainer">
          <img src={result.album.images[1].url} alt="Song" className="songImage" />
          <button
            className="playButton"
            onClick={togglePlayPause}
          >
            <img src={playButton} alt="Play/Pause" />
          </button>
        </div>
        <div className="songText">
          <div className="songTitle">{result.name}</div>
          <div className="songAlbum">{result.album.name}</div>
        </div>
      </div>
      <div className="artistInfo">
        <img src={result.album.images[1].url} alt="Artist" className="artistImage" />
        <div className="artistName">{result.artists[0].name}</div>
      </div>
    </div>
  );
};

export default Song;
