import TimelineComponent from "../components/timeline/timeline";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <><main className={styles.content}>
      <div id="background-video" className={styles.backgroundVideo}>
        <video autoPlay muted loop playsInline>
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
      </div>
      
        <TimelineComponent />
      </main>
    </>
  );
}