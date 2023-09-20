import styles from "./ShowableButton.module.css";

import Image from "next/image";

export default function ShowableButton({ show, iconName, onClickHandler }) {
  return (
    <button
      style={!show ? { opacity: 1 } : { opacity: 0 }}
      className={styles.button}
      onClick={() => onClickHandler()}
    >
      <Image
        alt={iconName + " button"}
        src={"icons/" + iconName + ".svg"}
        width={30}
        height={30}
      ></Image>
    </button>
  );
}
