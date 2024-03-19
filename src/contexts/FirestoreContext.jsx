import React, { useContext, useState, useEffect } from "react"

import { doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { colRef, db } from "../firebase/firebase"

//------------------------------------------------------------------------
// Song class.  It makes it easier to add a song
class Song {
    constructor (Album, Artist, Title ) {
        this.Album = Album;
        this.Artist = Artist;
        this.Title = Title;
    }
}
// Firestore data converter
const songConverter = {
    toFirestore: (song) => {
        return {
            Album: song.Album,
            Artist: song.Artist,
            Title: song.Title
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Song(data.Album, data.Artist, data.Title);
    }
};

export async function addSongToFS(songAlbum, songArtist, songTitle, songID){
    const ref = doc(db, "Song", songID).withConverter(songConverter);
    await setDoc(ref, new Song(songAlbum, songArtist, songTitle));
}
//-------------------------------------------------------------------------