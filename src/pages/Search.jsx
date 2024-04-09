import { useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import styles from "../components/Search.module.scss";

const Search = () => {
  const [results, setResults] = useState([]);
  const { logout, currentUser } = useAuth();
  const [missingUser, setMissingUser] = useState(currentUser?false:true);
  const [token, setToken] = useState(null);
  
  return (
      <>
        {missingUser && <Navigate to="/login" />}
        <image src="" />
        <div className={styles.search}>
            <SearchBar setResults={setResults} />
            <SearchResultsList results={results} />
        </div>
      </>
    );
  }

  export default Search;