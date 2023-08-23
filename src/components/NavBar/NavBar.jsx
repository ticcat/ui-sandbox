import styles from "./NavBar.module.css";

function NavBar({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default NavBar;
