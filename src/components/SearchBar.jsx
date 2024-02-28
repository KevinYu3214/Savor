// followed this tutorial https://www.youtube.com/watch?v=sWVgMcz8Q44&t=44s
import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

const CLIENT_ID = 'f7edf86569454d63bed822956ad01312';
const CLIENT_SECRET = 'dcfd14461e9f4b63abacec673ce3dc55';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(response => response.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  // Search
  async function search() {
    // Get request using search to get the Artist ID
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }    

    // Get request with Artist ID grab all the albums from that artist
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + input + '&type=track', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data.tracks.items);
        setResults(data.tracks.items);
      });

    // Display albums to the user
  }

  return (
    <div className={styles.search__wrapper}>
      <input 
        className={styles.search__input}
        placeholder="Search" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            search();
          }
        }}
      /> 
    </div>
  );
};

export default SearchBar;