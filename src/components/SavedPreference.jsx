import React, { useState, useEffect } from "react";
import "./SavedPreference.module.scss";
import { auth, db } from "../firebase/firebase";
import SearchBar from "./Search/SearchBar"
import PreferenceResultsList from "./Search/PreferenceResultsList";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

const SavedPreference = () => {
  const [results, setResults] = useState([]);
  const [songList, setSongList] = useState([]);
  const [songCount, setSongCount] = useState(0);
  const songCollectionList = collection(db, "Song");
  const preferencesCollectionList = collection(db, "Preferences");

  useEffect(() => {
    getSongList();
  }, []);

  const getSongList = async () => {
    //Query to find preferences
    const preferencesQuery = query(
      preferencesCollectionList,
      where("userId", "==", auth.currentUser.uid)
    );
    const preferencesQuerySnapshot = await getDocs(preferencesQuery);   
    const songIDList = preferencesQuerySnapshot.docs.map((doc) => doc.data().songId);

    //Query to find songs
    if (songIDList.length !== 0) {
      const songQuery = query(
          songCollectionList,
          where("songId", "in", songIDList)
      );
      const songQuerySnapshot = await getDocs(songQuery);
      const songs = songQuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setSongList(songs);
      setSongCount(songList.length);
    }
  };

  const deletePreference = async (song) => {
    
  }

  return (
  <>
      <div className="basic">Add songs that will be used to generate playlists!</div>
      <div>5 choices maximum</div>
      <SearchBar setResults={setResults} /> 
      {(songCount <= 4) &&<PreferenceResultsList results={results} onClick={getSongList}/>}

      <div>
        <div>Your Selections</div>
        {songList.length > 0 && songList.map((song) =>
          <div key={song.songId}>
            <img
              src={song.image}
              alt="Song" />
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <div>{song.album}</div>
            <div onClick={deletePreference(song)}>delete</div>
          </div>
        )}  
      </div>
  </>
  );
};

export default SavedPreference;