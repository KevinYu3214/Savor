import React, { useState, useEffect } from "react";
import "../components/Song.scss";
import playButton from "../assets/play-button-6.svg";
import { db, auth } from "../firebase/firebase";
import {
  getDocs,
  collection,
  addDoc,
  query,
  where,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Song = ({ result }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [songList, setSongList] = useState([]);

  const songCollectionList = collection(db, "Song");

  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [newArtist, setNewArtist] = useState("");
  const [newMusicTitle, setNewMusicTitle] = useState("");
  const [newRating, setNewRating] = useState(0);

  const onSubmitMusic = async () => {
    if (!result || !auth?.currentUser?.uid) return;

    // Define a query to check if the song already exists for the user
    const songsQuery = query(
      songCollectionList,
      where("userId", "==", auth.currentUser.uid),
      where("title", "==", result.name),
      where("artist", "==", result.artists[0].name)
    );
    try {
      const querySnapshot = await getDocs(songsQuery);
      if (querySnapshot.empty) {

        await addDoc(songCollectionList, {
          album: result.album.name,
          artist: result.artists[0].name,
          title: result.name,
          rating: newRating,
          userId: auth.currentUser.uid,
        });
        getSongList();
      }
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };  

  const getSongList = async () => {
    try {
      const data = await getDocs(songCollectionList);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        
      }));
      setSongList(filteredData);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSongList();
  }, []);

  const deleteSong = async () => {
    if (!result.docId) return;

    try {
      const songDocRef = doc(db, "Song", result.docId);
      await deleteDoc(songDocRef);
      console.log("Document successfully deleted!");
      getSongList(); // Refresh your song list to reflect the deletion
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const updateMovieRanking = async (id) => {
    const songDoc = doc(db, "Song", id);
    await updateDoc(songDoc, { rating: newRating });
  };

  useEffect(() => {
    const newAudio = new Audio(result.preview_url);
    setAudio(newAudio);

    return () => {
      newAudio.pause();
      setAudio(null); // Clean up the audio object
    };
  }, [result.preview_url]);

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="songContainer">
      <div className="songInfo">
        <div className="songImageContainer">
          <img src={result.album.images[1].url} alt="Song" className="songImage" />
          <button
            className="playButton"
            onClick={togglePlayPause}
          >
            <img src={playButton} alt="Play/Pause" />
          </button>
        </div>
        <div className="songText">
          <div className="songTitle">{result.name}</div>
          <div className="songAlbum">{result.album.name}</div>
        </div>
      </div>
      <div className="artistInfo">
        <img src={result.album.images[1].url} alt="Artist" className="artistImage" />
        <div className="artistName">{result.artists[0].name}</div>
      </div>
      <button onClick={onSubmitMusic} className="artistInfo">
        Add to Firebase
      </button>
      

    </div>
  );
};

export default Song;
