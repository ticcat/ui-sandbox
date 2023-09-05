import styles from "./AppButton.module.css";

function AppButton({ children, onClickHandler }) {
  return (
    <button className={styles.button} onClick={() => onClickHandler()}>
      {children}
    </button>
  );
}

export default AppButton;
