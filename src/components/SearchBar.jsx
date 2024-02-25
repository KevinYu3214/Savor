// followed this tutorial https://www.youtube.com/watch?v=sWVgMcz8Q44&t=44s
import React, {useState} from "react";
import styles from "./Search.module.scss";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((user) => {
        return (
          value && 
          user && 
          user.name && 
          user.name.toLowerCase().includes(value)
        );
      });
      setResults(results);
    });
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  };
  
  return (
    <div className={styles.search__wrapper}>
      <input 
        className={styles.search__input}
        placeholder="Search" 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}
      /> 
    </div>
  );
};

export default SearchBar;