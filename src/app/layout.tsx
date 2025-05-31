import React from "react";
import HEADLINE from "../components/headline/headline";
import TIMELINE from "../components/timeline/timeline";
import VIDEO from "../components/video/video";
import styles from "./layout.module.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="screen" className={styles.screen}>
          <VIDEO />
          <div id="top" className={styles.top}>
            <HEADLINE />
          </div>
          <div id="mid" className={styles.mid}>
            <TIMELINE />
          </div>
          <div id="bot" className={styles.bot}>{children}</div>
        </div>
      </body>
    </html>
  );
}