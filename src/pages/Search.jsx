import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import styles from "../components/Search.module.scss";

const Search = () => {
  const [results, setResults] = useState([]);
  return (
      <>
        <Header />
        <div className={styles.search}>
            <SearchBar setResults={setResults} />
            <SearchResultsList results={results} />
        </div>
      </>
    );
  }

  export default Search;