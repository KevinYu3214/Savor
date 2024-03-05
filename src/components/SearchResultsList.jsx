import React, { useContext } from "react";
import SearchResult from "./SearchResult";

import styles from "./Search.module.scss";
import ThemeContext from "../contexts/ThemeContext";

const SearchResultsList = ({ results }) => {
    const { theme } = useContext(ThemeContext); // Get the theme from context
    return (
        <div className={`${styles.search__results_list} ${styles[theme]}`}>
            {results.map((result, id) => {
                    return <SearchResult result={result} key={id} />;
                })}
        </div>
    );
}

export default SearchResultsList;