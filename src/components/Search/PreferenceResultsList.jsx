import React, { useContext, useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import styles from "./Search.module.scss";
import ThemeContext from "../../contexts/ThemeContext";
import { auth, db } from "../../firebase/firebase";
import {
    getDocs,
    collection,
    addDoc,
    query,
    where,
  } from "firebase/firestore";

const PreferenceResultsList = ({ results, setParam }) => {
  const { theme } = useContext(ThemeContext);
  const [errorMessage, setErrorMessage] = useState("");

  const [isVisible, setIsVisible] = useState(true);
  const preferencesCollectionList = collection(db, "Preferences");
  const songCollectionList = collection(db, "Song");

  const handleClick = (result) => {
    addPreference(result);
    setParam(result);
    setIsVisible(false);

  };

  const addPreference = async (song) => {
    if (!auth.currentUser?.uid) {
        setErrorMessage("You need to sign in to add a song.");
        window.alert(errorMessage);
        return;
      }
      try {
        const preferencesQuery = query(
          preferencesCollectionList,
          where("songId", "==", song.id)
        );
        const songsQuery = query(
          songCollectionList,
          where("songId", "==", song.id)
        );
  
        const preferencesQuerySnapshot = await getDocs(preferencesQuery);
        const songsQuerySnapshot = await getDocs(songsQuery);
        
  
        if (preferencesQuerySnapshot.empty) {
          // Song exists, update it
          await addDoc(preferencesCollectionList, {
            userId: auth.currentUser.uid,
            songId: song.id
          });
          if(songsQuerySnapshot.empty) {
            // Song doesn't exist, add it
            await addDoc(songCollectionList, {
                album: song.album.name,
                artist: song.artists[0].name,
                title: song.name,
                image: song.album.images[1].url,
                songId: song.id,
            });
            }   
        }
        setErrorMessage(""); // Clear error message
      } catch (error) {
        console.error("Error adding/updating song:", error.message);
        setErrorMessage("Failed to add/update song. Please try again.");
        window.alert(errorMessage); // Show error message as an alert
      }
  };

  useEffect(() => {
    setIsVisible(true);
  }, [results]);

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div className={`${styles.search__results_list} ${styles[theme]}`}>
        {results.map((result, id) => (
          <SearchResult
            key={id}
            onClick={() => handleClick(result)}
            result={result}
          />
        ))}
      </div>
    </div>
  );
};

export default PreferenceResultsList;