import React from "react";

import styles from "../styles/illustration.module.css";

const Illustration = (props) => {
  return (
    <div className={styles.illustrationContainer}>
      <img src={props.svg} alt="peace" className={styles.illustration} />
      <div className={styles.contentContainer}>
        <h2 className={styles.illustrationTitle}>{props.title}</h2>
        <p className={styles.illustrationContent}>{props.content}</p>
      </div>
    </div>
  );
};

export default Illustration;
