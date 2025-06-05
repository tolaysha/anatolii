"use client";

import React from "react";
import styles from "./appbar.module.css";

export default function AppBar() {
  return (
    <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a href="#" className={styles.navLink}>Home</a>
      </li>
      <li className={styles.navItem}>
        <a href="#" className={styles.navLink}>About</a>
      </li>
      <li className={styles.navItem}>
        <a href="#" className={styles.navLink}>Services</a>
      </li>
      <li className={styles.navItem}>
        <a href="#" className={styles.navLink}>Contact</a>
      </li>
    </ul>
  </nav>
  );
}