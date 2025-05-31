import styles from './Home.module.css';
import TimelineComponent from "../components/Timeline";


export default function Home() {
  return (
    <div>
      <main>
      <div className={styles.container}>
        <TimelineComponent />
      </div>
      </main>
    </div>
  );
}
