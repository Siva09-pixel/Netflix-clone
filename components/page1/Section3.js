import React from "react";
import SearchEmail from "./SearchEmail";
import Section3Card from "./Section3Card";
import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.outer}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <Section3Card />
      <h2>
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <SearchEmail />
    </div>
  );
};

export default Section3;
