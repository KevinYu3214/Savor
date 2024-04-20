import React from "react";
import MusicList from "./MusicList";
import Star from "../components/Star.jsx";
import "./PlaylistComponent.scss";

const PlaylistComponent = ({ songs }) => {
  return (
    <div className="containerPL">
      <div className="playlistDetails">
        <img src="http://placehold.it/" className="playlistImage" />
        <div className="playlistName"> Name </div>
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
