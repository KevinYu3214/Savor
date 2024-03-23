import React from "react";
import styles from "./Search.module.scss";

const SearchResult = ({ result, onClick }) => {
  return (
    <div className={styles.search__results_list__result} onClick={onClick}>
      <img
        src={result.album.images[1].url}
        alt="Album"
        className={styles.search__results_list__result__image}
      />
     
      <div className={styles.infoColumn}>
        <div className={styles.search__results_list__result__title}>
          {result.name}
        </div>
        <div className={styles.search__results_list__result__info}>
          <div className={styles.search__results_list__result__info__item}>
            {result.artists[0].name}
          </div>
          <div className={styles.search__results_list__result__info__item}>
            |
          </div>
          <div className={styles.search__results_list__result__info__item}>
          {result.album.release_date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
