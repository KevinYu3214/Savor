  import React, { useState, useEffect } from "react";
  import "../components/Song.scss";
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
    const [activeDropdownLink, setActiveDropdownLink] = useState(null);
    const [selectedDropdownText, setSelectedDropdownText] = useState('Dropdown Menu');

    const songCollectionList = collection(db, "Song");

    useEffect(() => {
      const newAudio = new Audio(result.preview_url);
      setAudio(newAudio);

      return () => {
        if (newAudio) {
          newAudio.pause();
        }
        setAudio(null); // Clean up the audio object
      };
    }, [result.preview_url]);

    useEffect(() => {
      getSongList();
    }, []);

    const getSongList = async () => {
      try {
        const data = await getDocs(songCollectionList);
        setSongList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.error(err);
      }
    };

    const onSubmitMusic = async () => {
      if (!result || !auth.currentUser?.uid) return;

      const songsQuery = query(
        songCollectionList,
        where("userId", "==", auth.currentUser.uid),
        where("title", "==", result.name),
        where("artist", "==", result.artists[0].name)
      );

      try {
        const querySnapshot = await getDocs(songsQuery);
        if (querySnapshot.empty) {
          const docRef = await addDoc(songCollectionList, {
            album: result.album.name,
            artist: result.artists[0].name,
            title: result.name,
            status: '',
            userId: auth.currentUser.uid,
            songId: result.id
          });
          console.log("Document written with ID: ", docRef.id); // For debug purposes
          setSongList(prevSongs => [...prevSongs, {
            ...result,
            firebaseId: docRef.id // Saving Firestore document ID with the song
          }]);        }
          getSongList();
      } catch (err) {
        console.error("Error adding document: ", err);
      }
    };

    const togglePlayPause = () => {
      if (audio) {
        isPlaying ? audio.pause() : audio.play();
        setIsPlaying(!isPlaying);
      }
    };
    const updateSongStatus = async (firebaseId, newStatus) => {
      if (!firebaseId) return;
    
      const songDocRef = doc(db, "Song", firebaseId);
      try {
        await updateDoc(songDocRef, { status: newStatus });
        console.log("Song status updated to: ", newStatus);
        getSongList(); // Refresh your list to reflect the update
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    };
    
    const handleDropdownLinkClick = async (index, text) => {
      // First, check if the song already exists in Firebase
      const songsQuery = query(
        songCollectionList,
        where("userId", "==", auth.currentUser.uid),
        where("songId", "==", result.id) // Assuming result.id is the unique Spotify song ID
      );
    
      const querySnapshot = await getDocs(songsQuery);
      if (querySnapshot.empty) {
        // If the song doesn't exist, add it to Firebase with the selected status
        try {
          await addDoc(songCollectionList, {
            album: result.album.name,
            artist: result.artists[0].name,
            title: result.name,
            status: text, // Set the status as selected from the dropdown
            userId: auth.currentUser.uid,
            songId: result.id // Spotify song ID for reference
          });
          console.log("Added new song with status: ", text);
        } catch (error) {
          console.error("Error adding new song to Firebase: ", error);
        }
      } else {
        // If the song exists, update its status
        const songDocRef = doc(db, "Song", querySnapshot.docs[0].id); // Get the first (and should be only) document's reference
        try {
          await updateDoc(songDocRef, { status: text });
          console.log("Updated status for existing song to: ", text);
        } catch (error) {
          console.error("Error updating song status: ", error);
        }
      }
    
      // Update UI state
      setActiveDropdownLink(current => (current === index ? null : index));
      setSelectedDropdownText(text);
      // Refresh your local song list to reflect the change
      getSongList();
    };
    
    
    
    
    

    return (
      <div className="songContainer">
        <div className="songInfo">
          <div className="songImageContainer">
            <img src={result.album.images[1].url} alt="Song" className="songImage" />
      
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
        <button onClick={onSubmitMusic} className="addFirebaseButton">
          Add to Firebase
        </button> 

        <div className="sec-center">  
          <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
          <label className="for-dropdown" htmlFor="dropdown">
            {selectedDropdownText} <i className="uil uil-arrow-down"></i>
          </label>        <div className="section-dropdown"> 
          {['Plan to Listen', 'Listened', 'Favorites', 'Recommendations'].map((text, index) => (
              <a
                key={index}
                href="#"
                className={`dropdown-link ${activeDropdownLink === index ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownLinkClick(index, text);
                }}
              >
                {text} <i className="uil uil-plus toggle-icon"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Song;
