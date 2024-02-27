import React from "react";
import SearchResult from "./SearchResult";

import styles from "./Search.module.scss";

const SearchResultsList = ({ results }) => {
    return (
        <div className={styles.search__results_list}>
            {results.map((result, id) => {
                    return <SearchResult result={result} key={id} />;
                })}
        </div>
    );
}

export default SearchResultsList;