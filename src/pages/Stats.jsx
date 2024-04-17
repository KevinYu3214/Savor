import React, { useEffect, useState } from "react";
import {
  fetchUserProfile,
  ensureValidToken,
  fetchTopTracks,
  suggestPlaylist,
} from "../spotify/Spotify"; // Import necessary functions from Spotify module
import Song from "../components/Song";
import PlaylistComponent from "../components/PlaylistComponent";

import sleeping from "../assets/generatePlaylistImages/activity/sleeping.jpeg";
import cleaning from "../assets/generatePlaylistImages/activity/cleaning.jpeg";
import cooking from "../assets/generatePlaylistImages/activity/cooking.jpeg";
import driving from "../assets/generatePlaylistImages/activity/driving.jpeg";
import party from "../assets/generatePlaylistImages/activity/party.jpeg";
import studying from "../assets/generatePlaylistImages/activity/studying.jpeg";
import workout from "../assets/generatePlaylistImages/activity/workout.jpeg";
import "./Stats.scss"; // Import the SCSS file
import podium from "../assets/playlist icons/podium.png"; // Import

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

  const handlePlaylistClick = (contents) => {
    setToDisplay(contents);
    setPlaylistShown(true);
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

  const handleTagClick = (image, text) => {
    setCurrentImage(image);
    setCurrentText(text);
    setMaskTextBackground(image); // Set the background image for maskText
    setSelectedImage(image); // Set the selected image
  };

  console.log("Rendering component...");
  return (
    <div>
      <h1>Spotify Profile</h1>
      {isLoading && <p>Loading...</p>}{" "}
      {/* Display loading message if data is being fetched */}
      {!isLoading && error && <p>Error: {error}</p>}{" "}
      {/* Display error message if there's an error */}
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
          <PlaylistComponent songs={suggestedPlaylist} />
          <img
            src={podium}
            onClick={() => handlePlaylistClick(suggestedPlaylist)}
          />
          {playlistShown && (
            <div>
              <PlaylistComponent songs={toDisplay} />
            </div>
          )}
          {/* <ul>
                        {suggestedPlaylist.map(track => (
                             <Song result={track} />
                        ))}
                    </ul> */}
        </div>
      )}
      <div className="orchid-container">
        {" "}
        {/* Add the orchid container */}
        <div className="custom-div">
          <p>
            <span></span>mood:
            <br />
            <i>SLEEP</i>
          </p>
          <div></div>
        </div>
        <div className="tags">
          {/* Clickable tags */}
          <button onClick={() => handleTagClick(sleeping, "Sleeping")}>
            Sleeping
          </button>
          <button onClick={() => handleTagClick(cleaning, "Cleaning")}>
            Cleaning
          </button>
          <button onClick={() => handleTagClick(cooking, "Cooking")}>
            Cooking
          </button>
          <button onClick={() => handleTagClick(driving, "Driving")}>
            Driving
          </button>
          <button onClick={() => handleTagClick(party, "Party")}>Party</button>
          <button onClick={() => handleTagClick(studying, "Studying")}>
            Studying
          </button>
          <button onClick={() => handleTagClick(workout, "Workout")}>
            Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
