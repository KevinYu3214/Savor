// followed this tutorial https://www.youtube.com/watch?v=sWVgMcz8Q44&t=44s
import React, { useState, useEffect, useContext } from "react";
import styles from "./Search.module.scss";
import { IoSearch } from "react-icons/io5";
import { search} from '../../spotify/Spotify';
import ThemeContext from "../../contexts/ThemeContext";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const { theme } = useContext(ThemeContext); // Get the theme from context
  const [authorizationError, setAuthorizationError] = useState(false); // State to track authorization error

  const handleSearch = async () => {
    if (!input.trim()) return; // Skip search if input is empty or contains only whitespace
    const success = await search(input, setResults, handleError);
    if (!success) {
      console.error('Authorization code not found in URL');
      setAuthorizationError(true);
    }
  };
  const handleError = () => {
    console.error('Error searching for tracks');
  };
  return (

    <>
        {authorizationError && <div className={styles.error}>Make sure to connect to Spotify!</div>}
        <div className={`${styles.search__wrapper} ${styles[theme]}`}>
         <IoSearch className={styles.search__icon}/>
         <input 
              className={styles.search__input}
              placeholder="Search" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
          />
    </div>
    </>
  );
};

export default SearchBar;