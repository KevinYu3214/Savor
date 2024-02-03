import React from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
        <input type="text" className={styles.searchbar__input} placeholder="Search" />
    </div>
  );
};

export default SearchBar;