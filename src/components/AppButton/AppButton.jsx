import styles from "./AppButton.module.css";

export default function AppButton({ children, onClickHandler }) {
  return (
    <button className={styles.button} onClick={() => onClickHandler()}>
      {children}
    </button>
  );
}
