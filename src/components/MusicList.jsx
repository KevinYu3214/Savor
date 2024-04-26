import React from "react";

import styles from "./MusicList.module.scss";
import Star from "../components/Star.jsx";

import icon from "../assets/icon.png";

function MusicList(props) {
  const songs = props.songs;
  // Function to convert milliseconds to minutes and seconds
  const formatDuration = (duration_ms) => {
    const totalSeconds = Math.floor(duration_ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  /*{
      key: "1",
      title: "Song 1 is way too long how should I style this",
      artist: "Artist 1",
      album: "Album 1",
      year: "2023",
      duration: "1:00",
    },
    {
      key: "2",
      title: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      year: "2023",
      duration: "1:00",
    },
    {
      key: "3",
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      year: "2023",
      duration: "1:00",
    },
    {
      key: "3",
      title: "Song 4",
      artist: "Artist 4",
      album: "Album 4",
      year: "2023",
      duration: "1:00",
    },
    {
      key: "3",
      title: "Song 5",
      artist: "Artist 5",
      album: "Album 5",
      year: "2023",
      duration: "1:00",
    },
  ]; */
  return (
    <div className={styles.musicBox}>
      {songs.map((song) => (
        <div className={styles.songItem} key={song.id}>
          <img src={song.album.images[1].url} className={styles.album} alt="" />
          <span className={styles.songTitleML}>{song.name}</span>
          <div className={styles.artistNameML}>
            {song.artists.map((artist) => artist.name).join(", ")}
          </div>
          <div className={styles.album}>{song.album.name}</div>
          {/*<Star className={styles.rank} song_id={song.id} />*/}
          <div className={styles.duration}>
            {" "}
            {formatDuration(song.duration_ms)}{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicList;
