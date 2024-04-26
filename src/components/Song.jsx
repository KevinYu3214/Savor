import React, { useState, useEffect } from "react";
import "../components/Song.scss";
import { db, auth } from "../firebase/firebase";
import playButton from "../assets/play-button-6.svg";
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
import { getFeatures } from "../spotify/Spotify.jsx";

const Song = ({ result }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [songList, setSongList] = useState([]);
  const [rankingList, setRankingList] = useState([]);
  const [selectedDropdownText, setSelectedDropdownText] =
    useState("Dropdown Menu");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [energy, setEnergy] = useState(0);

  const songCollectionList = collection(db, "Song");
  const rankingCollectionList = collection(db, "Ranking");

  //async function test(){
   // var r = await getFeatures(result.id, "energy");
   // console.log("r: " + r);
   // return r;
  //}

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

  useEffect(() => {
    getFeatures(result.id, "energy").then(feat => {
      console.log(feat);
      setEnergy(feat);
    })
  }, []);  

  useEffect(() => {
    console.log("xxxxxxxxxxxxxxxx")
    console.log("energy: " + energy);
  }, [energy]);

  const getSongList = async () => {
    const songData = await getDocs(songCollectionList);
    const rankingData = await getDocs(rankingCollectionList);
    setSongList(songData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setRankingList(rankingData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  useEffect(() => {
    // This useEffect reacts to changes in either the rankingList or the result (selected song).
    const currentRankingDetails = rankingList.find(
      (ranking) => ranking.songId === result.id
    );

    if (currentRankingDetails) {
      // Update local states with the details from the found song entry.
      setRating(currentRankingDetails.rating || "");
      setDate(currentRankingDetails.date || "");
      setNotes(currentRankingDetails.notes || "");
      setSelectedDropdownText(currentRankingDetails.status || "Status");
    } else {
      // Reset to default values if the song is not found (useful for when a new song is selected).
      setRating("");
      setDate("");
      setNotes("");
      setSelectedDropdownText("Status");
    }
  }, [rankingList, result]);
  
  const onSubmitMusic = async () => {
    console.log("check1")
    if (!auth.currentUser?.uid) {
      setErrorMessage("You need to sign in to add a song.");
      window.alert(errorMessage);
      return;
    }

    try {
      const rankingQuery = query(
        rankingCollectionList,
        where("userId", "==", auth.currentUser.uid),
        where("songId", "==", result.id)
      );
      var songId = result.id;
      console.log(songId)
      const songsQuery = query(
        songCollectionList,
        where("songId", "==", result.id)
      );

      const rankingQuerySnapshot = await getDocs(rankingQuery);
      const songsQuerySnapshot = await getDocs(songsQuery);

      if (!rankingQuerySnapshot.empty && !songsQuerySnapshot.empty) {
        // Song exists, update it
        const rankingDoc = rankingQuerySnapshot.docs[0];
        await updateDoc(doc(db, "Ranking", rankingDoc.id), {
          status: selectedDropdownText,
          rating,
          date,
          notes,
        });
      } else if (rankingQuerySnapshot.empty && !songsQuerySnapshot.empty){
        await addDoc(rankingCollectionList, {
          status: selectedDropdownText,
          rating,
          date,
          notes,
          userId: auth.currentUser.uid,
          songId: result.id,
        });
      } else {
        // Song doesn't exist, add it
        await addDoc(songCollectionList, {
          album: result.album.name,
          artist: result.artists[0].name,
          title: result.name,
          image: result.album.images[1].url,
          songId: result.id,
        });
        await addDoc(rankingCollectionList, {
          status: selectedDropdownText,
          rating,
          date,
          notes,
          userId: auth.currentUser.uid,
          songId: result.id,
        });
      }

      getSongList(); // Refresh list
      setErrorMessage(""); // Clear error message
    } catch (error) {
      console.error("Error adding/updating song:", error.message);
      setErrorMessage("Failed to add/update song. Please try again.");
      window.alert(errorMessage); // Show error message as an alert
    }
  };

  const togglePlayPause = () => {
    console.log("test");
    console.log("duration: " + audio.duration);
    console.log(audio);
    if (!isNaN(audio.duration)) {
      console.log("test2");
      isPlaying ? audio.pause() : audio.play();
      setIsPlaying(!isPlaying);
    } else {
      console.log("AUDIO IS NULL ;-;");
    }
  };

  const hasSample = () => {
    console.log("test");
    console.log("duration: " + audio.duration);
    if (!isNaN(audio.duration)) {
      console.log("test2");
      return true;
    } else {
      console.log("AUDIO IS NULL ;-;");
      return false;
    }
  };

  const deleteSong = async (songId) => {
    if (!songId) return;

    const rankingQuery = query(
      rankingCollectionList,
      where("songId", "==", songId),
      where("userId", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(rankingQuery);

    if (!querySnapshot.empty) {
      const rankingDoc = querySnapshot.docs[0];
      await deleteDoc(doc(db, "Ranking", rankingDoc.id));
      console.log("Song deleted successfully");
      getSongList(); // Refresh list
    } else {
      console.error("Song not found");
    }
  };

  const handleDropdownChange = (text) => {
    if (text === selectedDropdownText) {
      setSelectedDropdownText("Status"); // Reset to default value
    } else {
      // Update UI with the new selected value
      setSelectedDropdownText(text);
    }
  };

  return (
    <div className="songContainer">
      <div class="songBasicsContainer">
        <div className="songInfo">
          <div className="songImageContainer">
            <img
              src={result.album.images[1].url}
              alt="Song"
              className="songImage"
            />
            {result.preview_url ? (
              <button className="playButton" onClick={togglePlayPause}>
                <img src={playButton} alt="Play/Pause" />
              </button>
            ) : (
              <div className="noSampleBox">No Sample</div>
            )}
          </div>

          <div className="songMisc">
            
            <div className="songText">
              <div className="songTitle">{result.name}</div>
              <div className="artistInfo">Albumtest: {result.album.name}</div>
              <div className="artistInfo"> Artist: {result.artists[0].name}</div>
              <div className="artistInfo"> test: {energy} </div>
            </div>

            <Star className="songStar" onChange={(e) => setRating(e.value)}> </Star>

            <input
              className="songDate"
              type="date"
              placeholder="Finish Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <textarea
              className="songNotes"
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <button onClick={onSubmitMusic} className="addFirebaseButton">
              Save
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
        </div>
      </div>
    </div>
  );
};

export default Song;
