import React from "react";
import MusicList from "./MusicList";
import Star from "../components/Star.jsx";
import "./PlaylistComponent.scss";

const PlaylistComponent = ({ songs, image, name }) => {
  return (
    <div className="containerPL">
      <div className="playlistDetails">
        <img src={image} className="playlistImage" />
        <div className="playlistName"> {name} </div>
      </div>

      <div className="musicListDetails">
        <div className="blank">K </div>
        <div className="title"> Title </div>
        <div className="artistPC"> Artist </div>
        <div> Rank </div>
        <div> Duration </div>
      </div>
      <MusicList songs={songs} />
    </div>
  );
};

export default PlaylistComponent;
