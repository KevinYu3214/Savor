// followed this tutorial https://www.youtube.com/watch?v=sWVgMcz8Q44&t=44s
import React, { useState, useEffect, useContext } from "react";
import styles from "./Search.module.scss";
import { IoSearch } from "react-icons/io5";

import { MdAccountCircle } from "react-icons/md";
import { IconContext } from "react-icons";
import { ensureValidToken, search, clientId, clientSecret } from '../spotify/Spotify';
import ThemeContext from "../contexts/ThemeContext";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  
  const { theme } = useContext(ThemeContext); // Get the theme from context
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(response => response.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  return (
    <div className={`${styles.search__wrapper} ${styles[theme]}`}>
          <IconContext.Provider value={{ color: "rgb(205, 205, 205)", size: 25 }}>
              <IoSearch/>
          </IconContext.Provider>
          <input 
              className={styles.search__input}
              placeholder="Search" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  search(input, setResults);
                }
              }}
          ></input>

    </div>
  );
};

export default SearchBar;