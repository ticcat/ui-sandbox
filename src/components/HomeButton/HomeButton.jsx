"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./HomeButton.module.css";

import Image from "next/image";

function HomeButton() {
  const path = usePathname();
  const router = useRouter();
  const isHome = path === "/";

  return (
    <button
      style={!isHome ? { opacity: 1 } : { opacity: 0 }}
      className={styles.button}
      onClick={() => {
        router.push("/");
      }}
    >
      <Image
        alt="Home button"
        src="/icons/homeIcon.svg"
        width={30}
        height={30}
      ></Image>
    </button>
  );
}

export default HomeButton;
