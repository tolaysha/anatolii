"use client";

import React from "react";
import styles from "./core.module.css";
import { events } from "../../constants/events";

export default function Core() {
  return (
    <div className={styles.coreContainer}>
      <ul className={styles.eventList}>
        {events.map((event, index) => (
          <li key={index} className={styles.eventItem}>
            <strong className={styles.eventDate}>{event.date}</strong>
            <span className={styles.eventDescription}>{event.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}