"use client";

import React, { useRef } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import styles from "./Timeline.module.css";
import { events } from "@/constants/events"; // Используем абсолютный путь для импорта событий
import { useAutoScroll } from "@/hooks/useAutoScroll"; // Используем абсолютный путь для импорта хука

export default function TimelineComponent() {
  const timelineRef = useRef<HTMLDivElement>(null);

  //useAutoScroll(timelineRef, 5000);

  return (
    <div className={styles.timelineContainer} ref={timelineRef}>
      <h1 className={styles.timelineTitle}>Anatolii Kuzmin</h1>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div
                className={
                  index % 2 === 0
                    ? styles.timelineContent
                    : styles.timelineContentAlternate
                }
              >
                <strong>{event.date}</strong>
                <p>{event.description}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
