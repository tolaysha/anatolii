"use client";

import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PUSH from "../push/push";
import styles from "./headline.module.css";

export default function HEADLINE() {
  const [value, setValue] = React.useState(0);

  return (
    <div className={styles.headlineContainer}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        className={styles.bottomNavigation}
      >
        <BottomNavigationAction label="WHO" className={styles.action} />
        <BottomNavigationAction label="I" className={styles.action} />
        <BottomNavigationAction label="AM" className={styles.action} />
      </BottomNavigation>
      <PUSH />
    </div>
  );
}
