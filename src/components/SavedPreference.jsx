import React, { useState, useEffect, useCallback } from "react";
import "./SavedPreference.module.scss";
import { auth, db } from "../firebase/firebase";
import SearchBar from "./Search/SearchBar";
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
      setSongList((prevSongList) => prevSongList.filter((song) => song.songId !== songId));
    } else {
      console.error("Song not found");
    }
  }, [preferencesCollectionList, auth.currentUser.uid]);

  return (
    <>
      <div className="preference_saved-preference-container">
        <div className="preference_header">Add songs that will be used to generate playlists!</div>
        <div className="preference_instruction">5 choices maximum</div>
        <SearchBar setResults={setResults} />
        {songCount <= 4 && <PreferenceResultsList results={results} setParam={setRecentSong} />}

        <div className="preference_selections">
          <div className="preference_selections-header">Your Selections:</div>
          {songList.length > 0 &&
            songList.map((song) => (
              <div key={song.songId} className="preference_song-item">
                <img src={song.image} alt="Song" />
                <div className="preference_song-details">
                  <div className="preference_title">{song.title}</div>
                  <div className="preference_artist">{song.artist}</div>
                  <div className="preference_album">{song.album}</div>
                </div>
                <div className="preference_delete" onClick={() => deletePreference(song.songId)}>
                  Delete
                </div>
              </div>
            ))}
            {songList.length == 0 && <div className="preference_instruction">No selections made!</div>}
        </div>
      </div>
    </>
  );
};

export default SavedPreference;