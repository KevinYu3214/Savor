import styles from "../components/Profile.module.scss"
import { addSongToFS, updateSongRating, deleteSong, readSong} from "../contexts/FirestoreContext";
import React, { useContext, useState, useEffect } from "react"
import { doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { colRef, db } from "../firebase/firebase"

//Firestore updates immediately w/out anyone clicking the buttons.  since one of the buttons is deleteSong, that means that IMMEDIATELY, the song is added then deleted.
//Thus, you never end up getting to see the song in the DB!  IDK why
const Test = () => {
  return (
    
    <>
      <button onClick={updateSongRating(db, "testID", "2")} className={styles.button}>test update</button>
      <p><br></br><br></br><br></br><br></br><br></br><br></br></p>
      <button onClick={addSongToFS("testAlbum", "testArtist", "testTitle", "testID", 0)} className={styles.button}>test add</button>
      <p><br></br><br></br><br></br><br></br><br></br><br></br></p>
      <button onClick={readSong("testID")} className={styles.button}>test read</button>
    </>
  );
  }
export default Test;

// <button onClick={deleteSong(db, "testID")} className={styles.button}>test delete</button>
// Works but doesn't wait for button to be clicked so i put it over here