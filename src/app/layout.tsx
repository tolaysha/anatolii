import React from "react";
import HEADLINE from "../components/headline/headline";
import VIDEO from "../components/video/video";
import Core from "../components/core/core";
import styles from "./layout.module.css";
import AppBar from "../components/appbar/appbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en">
      <body>
        <div id="screen" className={styles.screen}>
          <div id="top" className={styles.top}>
            <AppBar />
          </div>
          <div id="mid" className={styles.mid}>
            <Core />
          </div>
          <div id="bot" className={styles.bot}>{children}</div>
        </div>
      </body>
    </html>
  );
}