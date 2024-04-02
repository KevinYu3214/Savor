import React from "react";

import styles from "./MusicList.module.scss";
import Star from "../components/Star.jsx";

import icon from "../assets/icon.png";

function MusicList() {
  const songs = [
    {
      key: "1",
      title: "Song 1",
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
  ];
  return (
    <div className={styles.musicBox}>
      {songs.map((song) => (
        <div className={styles.songItem}>
          <img src={icon} className={styles.album} alt="" />
          <span className={styles.songTitleML}>{song.title}</span>
          <div className={styles.artistNameML}>{song.artist}</div>
          <Star className={styles.rank} />
          <div className={styles.duration}> {song.duration} </div>
        </div>
      ))}
    </div>
  );
}

export default MusicList;
