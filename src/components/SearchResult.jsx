import React from "react";
import styles from "./Search.module.scss";

const SearchResult = ({ result }) => {
    return (
        <div 
        className={styles.search__result} 
        onClick={(e) => alert('You clicked on ' + result.name)}>
            {result.name}</div>
    );
}
export default SearchResult;