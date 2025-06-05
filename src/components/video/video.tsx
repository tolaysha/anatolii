"use client";

import React from "react";
import styles from "./video.module.css";

export default function VIDEO() {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted loop playsInline className={styles.video}>
         <source src="/blackend.mp4" type="video/mp4" />
      </video>
    </div>
  );
} 