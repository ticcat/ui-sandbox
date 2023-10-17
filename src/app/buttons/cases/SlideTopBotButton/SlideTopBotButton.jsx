import styles from "./SlideTopBotButton.module.css";

export default function SlideTopBotButton() {
  return (
    <div className={styles.cont}>
      <div className={styles.container}>
        <div className={styles.text}>Work</div>
        <div className={`${styles.text} ${styles.bottomText}`}>Work</div>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>About</div>
        <div className={`${styles.text} ${styles.bottomText}`}>About</div>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>Contact</div>
        <div className={`${styles.text} ${styles.bottomText}`}>Contact</div>
      </div>
    </div>
  );
}
