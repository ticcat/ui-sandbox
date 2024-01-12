"use client";

import { useState } from "react";
import styles from "./RotatingGlobe.module.css";

export default function RotatingGlobe() {
  return (
    <div className={styles.globeWrapper}>
      <div className={styles.globeExternal}>
        <div className={styles.verLine1}></div>
        <div className={styles.verLine2}></div>
        <div className={styles.verLine3}></div>
        <div className={styles.horLines}></div>
        <div className={styles.middleLine}></div>
      </div>
    </div>
  );
}
