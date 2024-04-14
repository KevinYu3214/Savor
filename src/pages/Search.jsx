import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import SearchBar from "../components/Search/SearchBar";
import SearchResultsList from "../components/Search/SearchResultsList";
import styles from "../components/Search/Search.module.scss";

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