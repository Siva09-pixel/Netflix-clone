import React from "react";
import SearchEmail from "./SearchEmail";
import NavBar from "../NavBar";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.content}>
        <NavBar />
        <div className={styles.text}>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
        <SearchEmail />
      </div>
    </div>
  );
};

export default Section1;
