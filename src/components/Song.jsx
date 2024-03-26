import React, { useState, useEffect } from "react";
import "../components/Song.scss";
import { db, auth } from "../firebase/firebase";
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
import Star from "../components/Star.jsx";

const Song = ({ result }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [songList, setSongList] = useState([]);
  const [selectedDropdownText, setSelectedDropdownText] =
    useState("Dropdown Menu");
  const [rating, setRating] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const songCollectionList = collection(db, "Song");

  useEffect(() => {
    const newAudio = new Audio(result.preview_url);
    setAudio(newAudio);
    return () => {
      if (newAudio) {
        newAudio.pause();
      }
      setAudio(null);
    };
  }, [result.preview_url]);

  useEffect(() => {
    getSongList();
  }, []);

  const getSongList = async () => {
    const data = await getDocs(songCollectionList);
    setSongList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    // This useEffect reacts to changes in either the songList or the result (selected song).
    const currentSongDetails = songList.find(
      (song) => song.songId === result.id
    );

    if (currentSongDetails) {
      // Update local states with the details from the found song entry.
      setRating(currentSongDetails.rating || "");
      setFinishDate(currentSongDetails.finishDate || "");
      setNotes(currentSongDetails.notes || "");
      setSelectedDropdownText(currentSongDetails.status || "Add to List");
    } else {
      // Reset to default values if the song is not found (useful for when a new song is selected).
      setRating("");
      setFinishDate("");
      setNotes("");
      setSelectedDropdownText("Add to List");
    }
  }, [songList, result]);
  const onSubmitMusic = async () => {
    if (!result || !auth.currentUser?.uid) return;

    const songsQuery = query(
      songCollectionList,
      where("userId", "==", auth.currentUser.uid),
      where("songId", "==", result.id)
    );

    const querySnapshot = await getDocs(songsQuery);

    if (!querySnapshot.empty) {
      // Song exists, update it
      const songDoc = querySnapshot.docs[0];
      await updateDoc(doc(db, "Song", songDoc.id), {
        status: selectedDropdownText,
        rating,
        finishDate,
        notes,
      });
    } else {
      // Song doesn't exist, add it
      await addDoc(songCollectionList, {
        album: result.album.name,
        artist: result.artists[0].name,
        title: result.name,
        status: selectedDropdownText,
        rating,
        finishDate,
        notes,
        userId: auth.currentUser.uid,
        songId: result.id,
      });
    }

    getSongList(); // Refresh list
  };

  const togglePlayPause = () => {
    if (audio) {
      isPlaying ? audio.pause() : audio.play();
      setIsPlaying(!isPlaying);
    }
  };
  const deleteSong = async (songId) => {
    if (!songId) return;

    const songsQuery = query(
      songCollectionList,
      where("songId", "==", songId),
      where("userId", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(songsQuery);

    if (!querySnapshot.empty) {
      const songDoc = querySnapshot.docs[0];
      await deleteDoc(doc(db, "Song", songDoc.id));
      console.log("Song deleted successfully");
      getSongList(); // Refresh list
    } else {
      console.error("Song not found");
    }
  };

  const handleDropdownChange = (text) => {
    if (text === selectedDropdownText) {
      setSelectedDropdownText("Add to List"); // Reset to default value
    } else {
      // Update UI with the new selected value
      setSelectedDropdownText(text);
    }   
  };

  return (
    <div className="songContainer">
      <div className="songInfo">
        <div className="songImageContainer">
          <img
            src={result.album.images[1].url}
            alt="Song"
            className="songImage"
          />
        </div>
        <div className="songText">
          <div className="songTitle">{result.name}</div>
          <div className="songAlbum">{result.album.name}</div>
        </div>
      </div>
      <Star> </Star>
      {/*<input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
  />*/}
      <input
        type="date"
        placeholder="Finish Date"
        value={finishDate}
        onChange={(e) => setFinishDate(e.target.value)}
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={onSubmitMusic} className="addFirebaseButton">
        Add to Firebase
      </button>
      <button
        onClick={() => deleteSong(result.id)}
        className="actionButton deleteButton"
      >
        Delete
      </button>
      <div className="sec-center">
        {/* Dropdown for song status */}
        <input
          className="dropdown"
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className="for-dropdown" htmlFor="dropdown">
          {selectedDropdownText} <i className="uil uil-arrow-down"></i>
        </label>
        <div className="section-dropdown">
          {["Plan to Listen", "Listened", "Favorites", "Recommendations"].map(
            (text, index) => (
              <a
                key={index}
                href="#"
                className={`dropdown-link ${
                  selectedDropdownText === text ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownChange(text);
                }}
              >
                {text} <i className="uil uil-plus toggle-icon"></i>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Song;
