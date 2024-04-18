import React, { useEffect, useState } from "react";
import {
  fetchUserProfile,
  ensureValidToken,
  fetchTopTracks,
  suggestPlaylist,
  generateCustomPlaylist
} from "../spotify/Spotify"; // Import necessary functions from Spotify module
import Song from "../components/Song";
import PlaylistComponent from "../components/PlaylistComponent";
import { ColorExtractor } from 'react-color-extractor';
import tinycolor from 'tinycolor2'; // Import tinycolor2 library

import sleeping from "../assets/generatePlaylistImages/activity/sleeping.jpeg";
import cleaning from "../assets/generatePlaylistImages/activity/cleaning.jpeg";
import cooking from "../assets/generatePlaylistImages/activity/cooking.jpeg";
import driving from "../assets/generatePlaylistImages/activity/driving.jpeg";
import party from "../assets/generatePlaylistImages/activity/party.jpeg";
import studying from "../assets/generatePlaylistImages/activity/studying.jpeg";
import workout from "../assets/generatePlaylistImages/activity/workout.jpeg";
import "./Stats.scss"; // Import the SCSS file
import podium from "../assets/playlist icons/podium.png"; // Import

import high_energy from "../assets/generatePlaylistImages/energy/high_energy.jpeg";
import low_energy from "../assets/generatePlaylistImages/energy/low_energy.jpeg";
import medium_energy from "../assets/generatePlaylistImages/energy/medium_energy.jpeg";

import calm from "../assets/generatePlaylistImages/mood/calm.jpeg";
import energetic from "../assets/generatePlaylistImages/mood/energetic.jpeg";
import happy from "../assets/generatePlaylistImages/mood/happy.jpeg";
import sad from "../assets/generatePlaylistImages/mood/sad.jpeg";

const Stats = () => {
  const [profileName, setProfileName] = useState("");
  const [topTracks, setTopTracks] = useState([]);
  const [suggestedPlaylist, setSuggestedPlaylist] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [toDisplay, setToDisplay] = useState([]); //for loading playlists
  const [playlistShown, setPlaylistShown] = useState(false);
  const [currentImage, setCurrentImage] = useState(sleeping); // State to track the current image
  const [currentText, setCurrentText] = useState("Sleeping"); // State to track the current text
  const [maskTextBackground, setMaskTextBackground] = useState(sleeping); // State to track the background image for maskText
  const [selectedImage, setSelectedImage] = useState(sleeping); // Initial value is sleeping image
  const [imageColor, setImageColor] = useState(""); // State to store the dominant color extracted from the image
  const [secondaryColor, setSecondaryColor] = useState("");
  const [tertiaryColor, setTertiaryColor] = useState("");
  const [category, setCategory] = useState("activity"); // Default category is "activity"
  const [categoryIndex, setCategoryIndex] = useState(0); // State to track the category index

  const handlePlaylistClick = (contents) => {
    setToDisplay(contents);
    setPlaylistShown(true);
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
        // Retrieve access token
        const token = await ensureValidToken();
        if (token) {
          console.log("Token retrieved:", token);
          if (!localStorage.getItem("profileName")) {
            console.log("Fetching user profile...");
            const { display_name } = await fetchUserProfile(token);
            console.log("User profile fetched:", display_name);
            localStorage.setItem("profileName", display_name); // Store profileName in local storage
            setProfileName(display_name);
            await delay(1000); // Wait for 1 second before making the next request
          } else {
            const display_name = localStorage.getItem("profileName");
            console.log(
              "User profile fetched from local storage:",
              display_name
            );
            setProfileName(display_name);
          }
          if (!localStorage.getItem("topTracks")) {
            console.log("Fetching top tracks...");
            let tracks = await fetchTopTracks(token);
            console.log(tracks);
            console.log(tracks.items);
            if (tracks && tracks.items) {
              // Ensure topTracksData.items is defined
              console.log("Top tracks fetched:", tracks);
              localStorage.setItem("topTracks", JSON.stringify(tracks.items)); // Store topTracks in local storage
              setTopTracks(tracks.items);
              console.log(topTracks);
              await delay(1000); // Wait for 1 second before making the next request
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
            let tracks = await fetchTopTracks(token);
            console.log(tracks);
            console.log(tracks.items);
            if (tracks && tracks.items) {
              // Ensure topTracksData.items is defined
              console.log("Fetching suggested playlist...");
              const slicedTracks = tracks.items.slice(0, 5);
              console.log(slicedTracks);
              suggestedTracks = await suggestPlaylist(
                token,
                slicedTracks.map((track) => track.id)
              );
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
          }
          setError("");
          setIsLoading(false); // Set loading status to false once data is fetched
        }
      } catch (error) {
        setError(`Failed to fetch data: ${error.message}`);
        setIsLoading(false); // Set loading status to false in case of error
      }
    };

    const delay = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    fetchData();
  }, []);


  const actionTexts = ["doing", "energy", "mood"];


  const activityEmojis = ["😴", "🧹", "🍳", "🚗", "🎉", "📚", "💪"];
  const activityTexts = ["sleep", "clean", "cook", "drive", "party", "study", "gym"];
  const activityImages = [
    sleeping, 
    cleaning, 
    cooking, 
    driving, 
    party, 
    studying,
    workout 
  ];
  const activityValues = [0.1, 0.5, 0.8, 0.6, 0.9, 0.4, 0.7];

  const energyEmojis = ["⚡️", "🔋", "🌀"];
  const energyTexts = ["high", "medium", "low"];
  const energyImages = [
    high_energy, // URL for high energy image
    medium_energy, // URL for medium energy image
    low_energy // URL for low energy image
  ];
  const energyValues = [0.9, 0.5, 0.2];

  const moodEmojis = ["😊", "😄", "😢", "😎"];
  const moodTexts = ["happy", "energetic", "sad", "calm"];  
  const moodImages = [
    happy, // URL for happy mood image
    energetic, // URL for energetic mood image
    sad, // URL for sad mood image
    calm // URL for calm mood image
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
          <button key={index} onClick={() => handleTagClick(activityImages[index], emoji, activityTexts[index])}>
            {emoji}
          </button>
        ));
      case "energy":
        return energyEmojis.map((emoji, index) => (
          <button key={index} onClick={() => handleTagClick(energyImages[index], emoji, energyTexts[index])}>
            {emoji}
          </button>
        ));
      case "mood":
        return moodEmojis.map((emoji, index) => (
          <button key={index} onClick={() => handleTagClick(moodImages[index], emoji, moodTexts[index])}>
            {emoji}
          </button>
        ));
      default:
        return null;
    }
  };
  
  
  const handleTagClick = async (image, emoji, text) => {
    let energy = 0.5; 
    let mood = 0.5;
    let activity = 0.5;
    let imageUrl = ""; // Initialize imageUrl variable to store the selected image URL
    switch (category) {
      case "activity":
        activity = activityValues[activityEmojis.indexOf(emoji)];
        imageUrl = activityImages[activityEmojis.indexOf(emoji)];
        break;
      case "energy":
        energy = energyValues[energyEmojis.indexOf(emoji)];
        imageUrl = energyImages[energyEmojis.indexOf(emoji)];
        break;
      case "mood":
        mood = moodValues[moodEmojis.indexOf(emoji)];
        imageUrl = moodImages[moodEmojis.indexOf(emoji)];
        break;
      default:
        return;
    }
    
    if (selectedImage !== imageUrl) { // Check if the selected image has changed
      setCurrentImage(imageUrl);
      setCurrentText(text);
      setMaskTextBackground(imageUrl); // Set the background image for maskText
      setSelectedImage(imageUrl); // Set the selected image URL
      extractDominantColor(imageUrl); // Extract dominant color when a tag is clicked
      
      console.log("Energy:", energy);
      console.log("Mood:", mood);
      console.log("Activity:", activity);
    }
  };
  

  console.log("Rendering component...");
  return (
    <div>
      <h1>Spotify Profile</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>Error: {error}</p>}
      {!isLoading && profileName && <p>Welcome, {profileName}</p>}
      {!isLoading && topTracks.length > 0 && (
        <div>
          <h2>Top Tracks</h2>
          <ul>
            {topTracks.map((track) => (
              <li key={track.id}>
                {track.name} by{" "}
                {track.artists.map((artist) => artist.name).join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isLoading && !profileName && <p>Loading profile...</p>}
      {!isLoading && !(topTracks.length > 0) && <p>Loading tracks ...</p>}
      {!isLoading && !(suggestedPlaylist.length > 0) && (
        <p>Loading playlists ...</p>
      )}
      {!isLoading && suggestedPlaylist.length > 0 && (
        <div>
          <h2>Suggested Playlist</h2>
          <div className="TopPlaylistContainer">
            <img
              className="playlistIcon"
              src={podium}
              onClick={() => handlePlaylistClick(topTracks)}
            />
            <h3 className="playlistTitle">Your Top Tracks</h3>
          </div>
          <div className="TopPlaylistContainer">
            <img
              className="playlistIcon"
              src={podium}
              onClick={() => handlePlaylistClick(suggestedPlaylist)}
            />
            <h3 className="playlistTitle">Suggested Tracks</h3>
          </div>
          {playlistShown && (
            <div className="overlayStats" onClick={handleOverlayClick}>
              <div onClick={(e) => e.stopPropagation()}>
                <PlaylistComponent songs={toDisplay} />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="orchid-container" 
        style={{ "--custom-color": imageColor, "--secondary-color": secondaryColor,
        "--tertiary-color": tertiaryColor }}>
        <div className="custom-div">
          <p>
            <span></span>{actionTexts[categoryIndex]}:
            <br />
            <i>{currentText}</i>
          </p>
          <div className="custom-image-container">
            <ColorExtractor getColors={extractDominantColor}>
              <img src={selectedImage} alt="Selected" />
            </ColorExtractor>
          </div>
        </div>
        <div className="tags">
        {renderTagButtons()}
        </div>
        <div className="category-buttons">
          <button onClick={() => handleCategoryChange("activity")}>Activity</button>
          <button onClick={() => handleCategoryChange("energy")}>Energy</button>
          <button onClick={() => handleCategoryChange("mood")}>Mood</button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
