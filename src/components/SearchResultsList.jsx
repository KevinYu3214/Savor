import React, { useContext, useState } from "react";
import SearchResult from "./SearchResult";
import Song from "../components/Song";
import styles from "./Search.module.scss";
import ThemeContext from "../contexts/ThemeContext";

const SearchResultsList = ({ results }) => {
  const [currResult, setCurrResult] = useState("");
  const [isShown, setIsShown] = useState(false);
  const { theme } = useContext(ThemeContext); // Get the theme from context

  const handleClick = (result) => {
    setCurrResult(result);
    setIsShown((isShown) => !isShown);
  };
  return (
    <div>
      <div className={`${styles.search__results_list} ${styles[theme]}`}>
        {results.map((result, id) => {
          return (
            <SearchResult
              onClick={() => handleClick(result)}
              result={result}
              key={id}
            />
          );
        })}
      </div>
      {isShown && (
        <div className={`${styles.songContainer} ${isShown ? styles.overlay : ''}`}>
          <Song result={currResult} />
          <button onClick={() => setIsShown(false)} className={styles.closeButton}>
          Close
        </button>
        </div>
        
      )}

    </div>
  );
};

export default SearchResultsList;
