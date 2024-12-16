import React from "react";
import styles from "./output.module.css";

const Output = ({ name, email }) => {
  return (
    <div className={styles.output}>
      <h2>Output</h2>
      <p>Name: {name} </p>
      <p>Email:{email}</p>
    </div>
  );
};

export default Output;
