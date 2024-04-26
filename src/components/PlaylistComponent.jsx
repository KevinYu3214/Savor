import React from "react";
import MusicList from "./MusicList";
import Star from "../components/Star.jsx";
import {
  createNewPlaylist,
  ensureValidToken,
  fetchUserProfile,
} from "../spotify/Spotify.jsx";
import "./PlayListComponent.scss";

const PlaylistComponent = ({ songs, image, name, id, token }) => {
  return (
    <div className="containerPL">
      <div className="playlistDetails">
        <img src={image} className="playlistImage" />
        <div className="playlistName"> {name} </div>
        <div className="playlistExport">
          <button
            onClick={() => {
              createNewPlaylist(id, token, songs, name);
            }}
            className="buttons"
          >
            Export to Spotify
          </button>
        </div>
      </div>
      <div className="musicListDetails">
        <div className="blank">K </div>
        <div className="title"> Title </div>
        <div className="artistPC"> Artist </div>
        <div> Album </div>
        <div> Duration </div>
      </div>
      <MusicList songs={songs} />
    </div>
  );
};

export default PlaylistComponent;
