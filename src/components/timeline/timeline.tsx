"use client";

import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from "@mui/lab";
import styles from "./timeline.module.css";
import { events } from "../../constants/events";

export default function TIMELINE() {
  return (
    <div className={styles.timelineContainer}>
      <Timeline position="right" className={styles.timeline}>
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <span
                className={styles.timelineDate}
                style={{
                  "--size": `${Math.random() * 0.3 + 1}rem`, // Случайный размер текста
                  "--rotation": `${Math.random() * 30 - 15}deg`, // Случайный поворот текста
                } as React.CSSProperties}
              >
                {event.date}
              </span>
              {index < events.length - 1 && <TimelineConnector style={{ backgroundColor: "#35393e" }} />}
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.timelineContent}>
               
                <p>{event.description}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
