import React from "react";

import styles from "./MusicList.module.scss";

function MusicList() {
    const [songs, setSongs] =  useState([
        {
            key: "1",
            title: "Boy's a liar, Pt. 2",
            artist: "Ice Spice",
            album: "PinkPantheress & Ice Spice",
            year: "2023"
        }, 
        {
            key: "2",
            title: "Deli",
            artist: "Ice Spice",
            album: "Like..? Deluxe",
            year: "2023"
        }, 
        {
            key: "3",
            title: "Princess Diana",
            artist: "Ice Spice",
            album: "Princess Diana - Single",
            year: "2023"
        }
    ]);
    return (
        <div className={styles.MusicList}>
            {songs.map((song) => {
                return (
                    <div key={song.key}>
                        <h2>{song.title}</h2>
                        <h3>{song.artist}</h3>
                        <h3>{song.album} - {song.year}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default MusicList;