import React from "react";
import styles from "./CompareButton.module.scss";
const CompareButton = (props) => {
  return (
    <div>
      <button className={styles.compare_button}>{props.text}</button>
    </div>
  );
};

export default CompareButton;
