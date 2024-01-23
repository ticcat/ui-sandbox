import { useState } from "react";
import styles from "./ExpandableCircleMenu.module.css";

export default function ExpandableCircleMenu() {
  const [hover, setHover] = useState(false);

  return (
    <div className={`${styles.container} ${hover && styles.active}`}>
      <ul className={styles.buttonsList}>
        <li className={`${styles.button} ${styles.text}`}>our products</li>
        <li className={`${styles.button} ${styles.text}`}>culture n&apos;CO</li>
        <li className={`${styles.button} ${styles.text}`}>Who we are</li>
        <li className={`${styles.button} ${styles.text}`}>Join the family</li>
      </ul>
      <div
        className={styles.circleBox}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      ></div>
    </div>
  );
}
