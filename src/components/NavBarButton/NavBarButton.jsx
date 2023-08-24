"use client";

import { useRouter } from "next/navigation";
import styles from "./NavBarButton.module.css";

function NavBarButton({ children, href }) {
  const router = useRouter();

  function handleClick() {
    router.push(href);
  }

  return (
    <button className={styles.button} onClick={() => handleClick()}>
      {children}
    </button>
  );
}

export default NavBarButton;
