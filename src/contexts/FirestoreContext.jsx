import React, { useContext, useState, useEffect } from "react"

import { doc, setDoc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { colRef, db } from "../firebase/firebase"

//------------------------------------------------------------------------
// Song class.  It makes it easier to add a song
class Song {
    constructor (Album, Artist, Title, Ranking ) {
        this.Album = Album;
        this.Artist = Artist;
        this.Title = Title;
        this.Ranking = Ranking;
    }
}
// Firestore data converter
const songConverter = {
    toFirestore: (song) => {
        return {
            Album: song.Album,
            Artist: song.Artist,
            Title: song.Title,
            Ranking: song.Ranking
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Song(data.Album, data.Artist, data.Title, data.Ranking);
    }
};

//UPDATE
//const rumblingRef = doc(db, "songs", "rumbling");
//await updateDoc(rumblingRef, {
  //genre: "anime"
//});

//DELETE
export async function deleteSong(db, songID){
    const songRef = doc(db, "Song", songID);
    await deleteDoc(songRef);
  }
//-------------------------------------------------------------------------
export async function updateSongRating(db, songName, newRating) {
  const songRef = doc(db, "Song", songName );
  await updateDoc(songRef, {rating: newRating})
}
//-------------------------------------------------------------------------
export async function addSongToFS(songAlbum, songArtist, songTitle, songID, songRanking){
    const ref = doc(db, "Song", songID).withConverter(songConverter);
    await setDoc(ref, new Song(songAlbum, songArtist, songTitle, songRanking));
}
//-------------------------------------------------------------------------
export async function readSong(songID){
    const docRef = doc(db, "Song", songID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }    
}


