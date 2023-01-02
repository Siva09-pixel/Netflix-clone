import React from "react";
import styles from "./Section2Left.module.css";

const Section2Left = ({ logo, head1, head2 }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.left}>
        <div className={styles.text}>
          <h1>{head1}</h1>
          <h2>{head2}</h2>
        </div>
      </div>
      <div className={styles.right}>
        <img src={logo.src} />
      </div>
    </div>
  );
};

export default Section2Left;
