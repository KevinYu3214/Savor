import React, { useState, useEffect, useCallback } from "react";
import "./SavedPreference.module.scss";
import { auth, db } from "../firebase/firebase";
import SearchBar from "./Search/SearchBar"
import PreferenceResultsList from "./Search/PreferenceResultsList";
import {
  getDocs,
  collection,
  deleteDoc,
  query,
  where,
  doc,
} from "firebase/firestore";

const SavedPreference = () => {
  const [results, setResults] = useState([]);
  const [recentSong, setRecentSong] = useState("");
  const [songList, setSongList] = useState([]);
  const [songCount, setSongCount] = useState(0);
  const songCollectionList = collection(db, "Song");
  const preferencesCollectionList = collection(db, "Preferences");

  const getSongList = useCallback(async () => {
    // Query to find preferences
    const preferencesQuery = query(
      preferencesCollectionList,
      where("userId", "==", auth.currentUser.uid)
    );
    const preferencesQuerySnapshot = await getDocs(preferencesQuery);   
    const songIDList = preferencesQuerySnapshot.docs.map((doc) => doc.data().songId);

    // Query to find songs
    if (songIDList.length !== 0) {
      const songQuery = query(
          songCollectionList,
          where("songId", "in", songIDList)
      );
      const songQuerySnapshot = await getDocs(songQuery);
      const songs = songQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setSongList(songs);
      setSongCount(songs.length); // Update song count here
    } else {
      // If no songs found, reset the song list
      setSongList([]);
      setSongCount(0);
    }
  }, [songCollectionList, preferencesCollectionList]);

  useEffect(() => {
    getSongList();
  }, [getSongList]);

  const deletePreference = useCallback(async (songId) => {
    if (!songId) return;
    
    const preferencesQuery = query(
      preferencesCollectionList,
      where("songId", "==", songId),
      where("userId", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(preferencesQuery);
  
    if (!querySnapshot.empty) {
      const preferencesDoc = querySnapshot.docs[0];
      await deleteDoc(doc(db, "Preferences", preferencesDoc.id));
      console.log("Song deleted successfully");
      
      // Remove the deleted song from the songList state
      setSongList(prevSongList => prevSongList.filter(song => song.songId !== songId));
    } else {
      console.error("Song not found");
    }
  }, [preferencesCollectionList, auth.currentUser.uid]);

  return (
    <>
      <div className="basic">Add songs that will be used to generate playlists!</div>
      <div>5 choices maximum</div>
      <SearchBar setResults={setResults} /> 
      {songCount <= 4 && <PreferenceResultsList results={results} setParam={setRecentSong}/>}

      <div>
        <div>Your Selections</div>
        {songList.length > 0 && songList.map((song) =>
          <div key={song.songId}>
            <img src={song.image} alt="Song" />
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <div>{song.album}</div>
            <div onClick={() => deletePreference(song.songId)}>delete</div>
          </div>
        )}  
      </div>
    </>
  );
};

export default SavedPreference;