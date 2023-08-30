import styles from "./ContentPanel.module.css";

function ContentPanel({ children }) {
  return (
    <>
      <h1 className={styles.title}>{children}</h1>
    </>
  );
}

export default ContentPanel;
