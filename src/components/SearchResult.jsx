import React from "react";
import styles from "./Search.module.scss";

const SearchResult = ({ result }) => {
    return (
        <div 
        className={styles.search__results_list__result} 
        onClick={(e) => alert('You clicked on ' + result.name)}>
            <img src={result.images[1].url} 
            className={styles.search__results_list__result__image}/>
            <div 
            className={styles.search__results_list__result__title}>
                {result.name}
            </div>
        </div>
    );
}
export default SearchResult;