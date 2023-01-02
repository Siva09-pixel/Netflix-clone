import React from "react";
import styles from "./NavBar.module.css";
import Image from "next/legacy/image";
import logo from "../Netflix-images/logo.png";
import Link from "next/link";

const Navlogo = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.left}>
        <Link href="/">
          <Image src={logo} alt="Logo" layout="responsive" />
        </Link>
      </div>
    </div>
  );
};

export default Navlogo;
