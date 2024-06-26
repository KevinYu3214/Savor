import React, { useEffect, useState } from "react";
import {
  fetchUserProfile,
  ensureValidToken,
  fetchTopTracks,
  suggestPlaylist,
  generateCustomPlaylist,
  isConnectedToSpotify,
} from "../spotify/Spotify"; // Import necessary functions from Spotify module
import Song from "../components/Song";
import PlaylistComponent from "../components/PlaylistComponent";
import { ColorExtractor } from "react-color-extractor";
//import tinycolor from "tinycolor2"; // Import tinycolor2 library
import { db, auth } from "../firebase/firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  query,
  where,
  doc,
  QuerySnapshot,
} from "firebase/firestore";

import sleeping from "../assets/generatePlaylistImages/activity/sleeping.jpeg";
import cleaning from "../assets/generatePlaylistImages/activity/cleaning.jpeg";
import cooking from "../assets/generatePlaylistImages/activity/cooking.jpeg";
import driving from "../assets/generatePlaylistImages/activity/driving.jpeg";
import party from "../assets/generatePlaylistImages/activity/party.jpeg";
import studying from "../assets/generatePlaylistImages/activity/studying.jpeg";
import workout from "../assets/generatePlaylistImages/activity/workout.jpeg";
import podium from "../assets/playlist icons/podium.png"; // Import
import suggestion from "../assets/playlist icons/suggestion.png"; // Import
import custom from "../assets/playlist icons/custom.png"; // Import
import custom2 from "../assets/playlist icons/custom2.png"; // Import
import custom3 from "../assets/playlist icons/custom3.png"; // Import

import high_energy from "../assets/generatePlaylistImages/energy/high_energy.jpeg";
import low_energy from "../assets/generatePlaylistImages/energy/low_energy.jpeg";
import medium_energy from "../assets/generatePlaylistImages/energy/medium_energy.jpeg";

import calm from "../assets/generatePlaylistImages/mood/calm.jpeg";
import energetic from "../assets/generatePlaylistImages/mood/energetic.jpeg";
import happy from "../assets/generatePlaylistImages/mood/happy.jpeg";
import sad from "../assets/generatePlaylistImages/mood/sad.jpeg";
import { LuTrophy } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";

import "./Playlists.scss";

const ConnectText = () => {
  return <div className="connectText">Make sure to sign into spotify!</div>;
};

const LoadingComponent = () => {
  return (
    <section className="wrapper">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

const Playlists = () => {
  const [profileName, setProfileName] = useState("");
  const [spotifyId, setSpotifyId] = useState("");
  const [topTracks, setTopTracks] = useState([]);
  const [suggestedPlaylist, setSuggestedPlaylist] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [toDisplay, setToDisplay] = useState([]); //for loading playlists
  const [playlistImage, setPlaylistImage] = useState("http://placehold.it/");
  const [playlistName, setPlaylistName] = useState("Name");
  const [playlistShown, setPlaylistShown] = useState(false);
  const [currentText, setCurrentText] = useState("Sleeping"); // State to track the current text
  const [selectedImage, setSelectedImage] = useState(sleeping);
  const [imageColor, setImageColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [tertiaryColor, setTertiaryColor] = useState("");
  const [category, setCategory] = useState("activity"); // Default category is "activity"
  const [categoryIndex, setCategoryIndex] = useState(0); // State to track the category index
  const [activity, setActivity] = useState(0.5);
  const [energy, setEnergy] = useState(0.5);
  const [mood, setMood] = useState(0.5);
  const [token, setToken] = useState(null); // State to store the token
  const [generatedPlaylist, setGeneratedPlaylist] = useState([]);
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);
  const preferencesCollectionList = collection(db, "Preferences");

  useEffect(() => {
    const spotifyConnected = localStorage.getItem("spotifyConnected");
    setIsSpotifyConnected(spotifyConnected === "true");
  }, []);

  const handlePlaylistClick = (contents, image, name) => {
    setToDisplay(contents);
    setPlaylistShown(true);
    setPlaylistImage(image);
    setPlaylistName(name);
    console.log("image " + playlistImage);
    console.log(playlistName);
  };

  const handleOverlayClick = () => {
    setPlaylistShown(false);
  };

  const extractDominantColor = (colors) => {
    if (colors && colors.length > 0) {
      const primaryColor = colors[0]; // Get the first color
      setImageColor(primaryColor);

      // Call getColors to get both secondary and tertiary colors
      const { secondaryColor, tertiaryColor } = getColors(primaryColor);

      // Set the secondary and tertiary colors
      setSecondaryColor(secondaryColor);
      setTertiaryColor(tertiaryColor);
    }
  };

  const getColors = (color) => {
    // Convert the color to tinycolor instance
    const primaryColor = tinycolor(color);
    // Calculate the complementary color
    const secondaryColor = primaryColor.darken(20).toHexString();
    const tertiaryColor = primaryColor.darken(10).toHexString();

    // Return the hexadecimal representation of the secondary color
    return { secondaryColor, tertiaryColor };
  };

  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      try {
        const fetchedToken = await ensureValidToken();
        if (fetchedToken) {
          console.log("Token retrieved:", fetchedToken);
          setToken(fetchedToken); // Set the token in state
          if (!localStorage.getItem("profileName")) {
            console.log("Fetching user profile...");
            console.log("Token retrieved:", token);
            const { display_name, id } = await fetchUserProfile(fetchedToken);
            console.log("User profile fetched:", display_name);
            setSpotifyId(id);
            console.log("User profile fetched:", id);
            localStorage.setItem("profileName", display_name); // Store profileName in local storage
            localStorage.setItem("spotifyId", id);
            setProfileName(display_name);
            await delay(1000); // Wait for 1 second before making the next request
          } else {
            const display_name = localStorage.getItem("profileName");
            const id = localStorage.getItem("spotifyId");
            console.log(
              "User profile fetched from local storage:",
              display_name
            );
            console.log("User profile fetched from local storage", id);
            setSpotifyId(id);
            setProfileName(display_name);
          }
          if (!localStorage.getItem("topTracks")) {
            console.log("Fetching top tracks...");
            let tracks = await fetchTopTracks(fetchedToken);
            console.log(tracks);
            console.log(tracks.items);
            if (tracks && tracks.items) {
              // Ensure topTracksData.items is defined
              console.log("Top tracks fetched:", tracks);
              localStorage.setItem("topTracks", JSON.stringify(tracks.items)); // Store topTracks in local storage
              setTopTracks(tracks.items);
              console.log(topTracks);
              await delay(2000); // Wait for 2 seconds before making the next request
            }
          } else {
            const storedTopTracks = JSON.parse(
              localStorage.getItem("topTracks")
            );
            console.log(
              "Top tracks fetched from local storage:",
              storedTopTracks
            );
            setTopTracks(storedTopTracks);
          }

          if (!localStorage.getItem("suggested_playlist")) {
            let suggestedTracks = [];

            const preferencesQuery = query(
              preferencesCollectionList,
              where("userId", "==", auth.currentUser.uid)
            );
            const preferencesQuerySnapshot = await getDocs(preferencesQuery);
            const tracks = preferencesQuerySnapshot.docs.map(
              (doc) => doc.data().songId
            );
            if (tracks.length == 0) {
              let tracks = await fetchTopTracks(fetchedToken);
              const slicedTracks = tracks.items.slice(0, 5);
              console.log(slicedTracks);
              suggestedTracks = await suggestPlaylist(
                fetchedToken,
                slicedTracks.map((track) => track.id)
              );
              localStorage.setItem(
                "suggested_playlist",
                JSON.stringify(suggestedTracks)
              );
              setSuggestedPlaylist(suggestedTracks);
              await delay(1000); // Wait for 1 second before making the next request
            } else {
              // Ensure topTracksData.items is defined
              console.log("Fetching suggested playlist...");
              suggestedTracks = await suggestPlaylist(fetchedToken, tracks);
              console.log("Suggested playlist fetched:", suggestedTracks);
              localStorage.setItem(
                "suggested_playlist",
                JSON.stringify(suggestedTracks)
              );
              setSuggestedPlaylist(suggestedTracks);
              await delay(1000); // Wait for 1 second before making the next request
            }
          } else {
            const storedSuggestedPlaylist = JSON.parse(
              localStorage.getItem("suggested_playlist")
            );
            console.log(
              "Suggested playlist fetched from local storage:",
              storedSuggestedPlaylist
            );
            setSuggestedPlaylist(storedSuggestedPlaylist);
            await delay(500);
          }
          setError("");
          setIsLoading(false); // Set loading status to false once data is fetched
        }
      } catch (error) {
        setError(`Failed to fetch data: ${error.message}`);
        setIsLoading(false); // Set loading status to false in case of error
      }
    };

    fetchData();
  }, []);

  const actionTexts = ["doing", "energy", "mood"];

  const activityEmojis = ["😴", "🧹", "🍳", "🚗", "🎉", "📚", "💪"];
  const activityTexts = [
    "sleep",
    "clean",
    "cook",
    "drive",
    "party",
    "study",
    "gym",
  ];
  const activityImages = [
    sleeping,
    cleaning,
    cooking,
    driving,
    party,
    studying,
    workout,
  ];
  const activityValues = [0.1, 0.5, 0.8, 0.6, 0.9, 0.4, 0.7];

  const energyEmojis = ["⚡️", "🔋", "🌀"];
  const energyTexts = ["high", "medium", "low"];
  const energyImages = [
    high_energy, // URL for high energy image
    medium_energy, // URL for medium energy image
    low_energy, // URL for low energy image
  ];
  const energyValues = [0.9, 0.5, 0.2];

  const moodEmojis = ["😊", "😄", "😢", "😎"];
  const moodTexts = ["happy", "energetic", "sad", "calm"];
  const moodImages = [
    happy, // URL for happy mood image
    energetic, // URL for energetic mood image
    sad, // URL for sad mood image
    calm, // URL for calm mood image
  ];
  const moodValues = [0.9, 0.8, 0.2, 0.5];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    switch (newCategory) {
      case "activity":
        setCurrentText("sleep");
        setSelectedImage(sleeping);
        setCategoryIndex(0);
        break;
      case "energy":
        setCurrentText("medium");
        setSelectedImage(medium_energy);
        setCategoryIndex(1);
        break;
      case "mood":
        setCurrentText("calm");
        setSelectedImage(calm);
        setCategoryIndex(2);
        break;
      default:
        setCurrentText("doing");
        setSelectedImage(sleeping);
        setCategoryIndex(0);
        break;
    }
  };

  const renderTagButtons = () => {
    switch (category) {
      case "activity":
        return activityEmojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() =>
              handleTagClick(activityImages[index], emoji, activityTexts[index])
            }
          >
            {emoji}
          </button>
        ));
      case "energy":
        return energyEmojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() =>
              handleTagClick(energyImages[index], emoji, energyTexts[index])
            }
          >
            {emoji}
          </button>
        ));
      case "mood":
        return moodEmojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() =>
              handleTagClick(moodImages[index], emoji, moodTexts[index])
            }
          >
            {emoji}
          </button>
        ));
      default:
        return null;
    }
  };

  const handleTagClick = async (image, emoji, text) => {
    let newEnergy = energy;
    let newMood = mood;
    let newActivity = activity;
    let imageUrl = "";

    switch (category) {
      case "activity":
        newActivity = activityValues[activityTexts.indexOf(text)];
        imageUrl = image;
        break;
      case "energy":
        newEnergy = energyValues[energyTexts.indexOf(text)];
        imageUrl = image;
        break;
      case "mood":
        newMood = moodValues[moodTexts.indexOf(text)];
        imageUrl = image;
        break;
      default:
        return;
    }

    if (selectedImage !== imageUrl) {
      setCurrentText(text);
      setSelectedImage(imageUrl);

      extractDominantColor(imageUrl);

      setActivity(newActivity);
      setEnergy(newEnergy);
      setMood(newMood);

      console.log("Energy:", newEnergy);
      console.log("Mood:", newMood);
      console.log("Activity:", newActivity);
    }
  };

  const handleGeneratePlaylistClick = async () => {
    const fetchedToken = await ensureValidToken();
    console.log("Generate Playlist");

    const preferencesQuery = query(
      preferencesCollectionList,
      where("userId", "==", auth.currentUser.uid)
    );
    const preferencesQuerySnapshot = await getDocs(preferencesQuery);
    const songIds = preferencesQuerySnapshot.docs.map(
      (doc) => doc.data().songId
    );

    if (fetchedToken) {
      console.log(fetchedToken, energy, mood, activity, songIds);
      let tracks = await generateCustomPlaylist(
        fetchedToken,
        energy,
        mood,
        activity,
        songIds
      );
      await delay(1000); // Wait for 1 second before making the next request
      setGeneratedPlaylist(tracks);
      handlePlaylistClick(tracks, custom2, "Custom Playlist");
    }
    console.log(fetchedToken);
  };

  const delay = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  console.log("Rendering component...");
  return (
    <div>
      {isLoading && (
        <div className="center">
          <LoadingComponent />
          {!isSpotifyConnected && isLoading && <ConnectText />}
        </div>
      )}
      {!isLoading && error && <p>Error: {error}</p>}
      {!isLoading && suggestedPlaylist.length > 0 && (
        <div>
          <div className="allPlaylistsContainer">
            <div className="topPlaylistContainer">
              <img
                className="playlistIcon"
                src={podium}
                onClick={() =>
                  handlePlaylistClick(topTracks, podium, "Your Top Tracks")
                }
              />
              <h3 className="playlistTitle">Your Top Tracks</h3>
            </div>
            <div className="suggestedPlaylistContainer">
              <img
                className="playlistIcon"
                src={suggestion}
                onClick={() =>
                  handlePlaylistClick(
                    suggestedPlaylist,
                    suggestion,
                    "Suggested Tracks"
                  )
                }
              />
              <h3 className="playlistTitle">Suggested Tracks</h3>
            </div>
            {playlistShown && (
              <div className="overlayStats" onClick={handleOverlayClick}>
                <div onClick={(e) => e.stopPropagation()}>
                  <PlaylistComponent
                    songs={toDisplay}
                    image={playlistImage}
                    name={playlistName}
                    id={spotifyId}
                    token={token}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!isLoading && (
        <div
          className="orchid-container"
          style={{
            "--custom-color": imageColor,
            "--secondary-color": secondaryColor,
            "--tertiary-color": tertiaryColor,
          }}
        >
          <div className="custom-div">
            <p>
              <span></span>
              {actionTexts[categoryIndex]}:
              <br />
              <i>{currentText}</i>
            </p>
            <div className="custom-image-container">
              <ColorExtractor getColors={extractDominantColor}>
                <img src={selectedImage} alt="Selected" />
              </ColorExtractor>
            </div>
          </div>
          <div className="tags">{renderTagButtons()}</div>
          <div>
            <button
              className="category-buttons"
              onClick={() => handleCategoryChange("activity")}
            >
              Activity
            </button>
            <button
              className="category-buttons"
              onClick={() => handleCategoryChange("energy")}
            >
              Energy
            </button>
            <button
              className="category-buttons"
              onClick={() => handleCategoryChange("mood")}
            >
              Mood
            </button>
          </div>
          <br></br>
          <button
            className="category-buttons"
            onClick={handleGeneratePlaylistClick}
          >
            Generate Custom Playlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Playlists;
