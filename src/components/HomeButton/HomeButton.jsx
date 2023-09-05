"use client";

import { usePathname } from "next/navigation";
import styles from "./HomeButton.module.css";

import Image from "next/image";

export default function HomeButton({ iconName, onClickHandler }) {
  // TODO: Add appear condition to props and rename to HiddeblebeButton
  const path = usePathname();
  const isHome = path === "/";

  return (
    <button
      style={!isHome ? { opacity: 1 } : { opacity: 0 }}
      className={styles.button}
      onClick={() => onClickHandler()}
    >
      <Image
        alt={{ iconName } + " button"}
        src={"/icons/" + iconName + ".svg"}
        width={30}
        height={30}
      ></Image>
    </button>
  );
}
