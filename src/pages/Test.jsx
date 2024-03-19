import styles from "../components/Profile.module.scss"
import { addSongToFS } from "../contexts/FirestoreContext";
import React, { useContext, useState, useEffect } from "react"
import { doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { colRef, db } from "../firebase/firebase"

const Test = () => {

    //addSongToFS("testAlbum", "testArtist", "testTitle", "testID")
  return (
    <>
      <button onClick={addSongToFS("testAlbum", "testArtist", "testTitle", "testID")} className={styles.button}>test</button>
    </>
  );
  }
export default Test;

