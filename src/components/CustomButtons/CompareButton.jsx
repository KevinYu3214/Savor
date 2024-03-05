import React, { useContext } from "react";
import styles from "./CompareButton.module.scss";
import ThemeContext from "../../contexts/ThemeContext";
const CompareButton = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button className={`${styles.compare_button} ${styles[theme]}`}>{props.text}</button>
    </div>
  );
};

export default CompareButton;
