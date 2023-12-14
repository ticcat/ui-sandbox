import { useState } from "react";
import styles from "./RenxaMenuButton.module.css";

export default function RenxaMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.buttonContainer}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <span
        className={`${styles.menuText} ${open ? styles.open : styles.closed}`}
      >
        <span className={styles.letter}>M</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>n</span>
        <span className={styles.letter}>u</span>
      </span>
      <span
        className={`${styles.closeText} ${open ? styles.open : styles.closed}`}
      >
        <span className={styles.letter}>C</span>
        <span className={styles.letter}>l</span>
        <span className={styles.letter}>o</span>
        <span className={styles.letter}>s</span>
        <span className={styles.letter}>e</span>
      </span>
      <div className={styles.buttonCover}></div>
    </div>
  );
}
