import React, { useContext, useState, useRef } from "react";
import SearchResult from "./SearchResult";
import Song from "../../components/Song";
import styles from "./Search.module.scss";
import ThemeContext from "../../contexts/ThemeContext";
import useOnClickOutside from "./useOnClickOutside"; // Adjust the path as needed

const SearchResultsList = ({ results }) => {
  const [currResult, setCurrResult] = useState("");
  const [isShown, setIsShown] = useState(false);
  const { theme } = useContext(ThemeContext);
  const modalRef = useRef(); // Ref for the modal content

  // Use the hook to close the modal when clicking outside
  useOnClickOutside(modalRef, () => setIsShown(false));

  const handleClick = (result) => {
    setCurrResult(result);
    setIsShown(true);
  };

  return (
    <div>
      <div className={`${styles.search__results_list} ${styles[theme]}`}>
        {results.map((result, id) => (
          <SearchResult key={id} onClick={() => handleClick(result)} result={result} />
        ))}
      </div>
      {isShown && (
        <div className={styles.overlay}>
          {/* Attach the ref to the modal content */}
          <div ref={modalRef}>
            <Song result={currResult} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsList;
