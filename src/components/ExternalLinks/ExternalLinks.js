"use client";

import styles from "./ExternalLinks.module.css";
import Link from "next/link";

export default function ExternalLinks() {
  return (
    <div className={styles.container}>
      <Link
        href="https://github.com/ticcat/ui-sandbox"
        target="_blank"
        className={styles.link}
      >
        Github
      </Link>
      <Link
        href="https://www.sergiori.co/"
        target="_blank"
        className={styles.link}
      >
        <div className={styles.text}>Personal site</div>
      </Link>
    </div>
  );
}
