import React from "react";
import MusicList from "./MusicList";
import Star from "../components/Star.jsx";
// import "./PlaylistComponent.scss"

const PlaylistComponent = () => {
  return (
    <div className="containerPL">
      <div className="playlistDetails">
        <img src="http://placehold.it/" className="playlistImage" />
        <div className="playlistName"> Name </div>
      </div>

      <div className="musicListDetails">
        <div className="blank"> Blankkkkkkk</div>
        <div> Title </div>
        <div> Album </div>
        <div> Rank </div>
        <div> Duration </div>
      </div>
      <MusicList />
    </div>
  );
};

export default PlaylistComponent;
