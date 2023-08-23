"use client";

import styles from "./NavBarButton.module.css";

function NavBarButton({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default NavBarButton;
