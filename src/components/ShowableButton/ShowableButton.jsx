"use client";

import { usePathname } from "next/navigation";
import styles from "./ShowableButton.module.css";

import Image from "next/image";

export default function ShowableButton({ show, iconName, onClickHandler }) {
  // TODO: Add appear condition to props and rename to HiddeblebeButton
  const path = usePathname();

  return (
    <button
      style={!show ? { opacity: 1 } : { opacity: 0 }}
      className={styles.button}
      onClick={() => onClickHandler()}
    >
      <Image
        alt={iconName + " button"}
        src={"/" + iconName + ".svg"}
        width={30}
        height={30}
      ></Image>
    </button>
  );
}
