"use client";

import { useProjectStore } from "@/hooks/ProjectStore";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./ContentPanel.module.css";

function NoContentScreen() {
  return (
    <div className={styles.noCaseContainer}>
      <p className={styles.title}>No study cases yet :(</p>
      <Image
        alt="Sad face"
        src="/icons/sadFace.svg"
        className={styles.sadFace}
        width={100}
        height={100}
      ></Image>
    </div>
  );
}

function ContentCard({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles.preview}></div>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
}

function ContentPanel() {
  const getProjectByPath = useProjectStore((state) => state.getProjectByPath);

  const path = usePathname();
  const cases = getProjectByPath(path).cases.map((it) => (
    <ContentCard key={it.id}>{it.name}</ContentCard>
  ));

  if (cases.length === 0) {
    return <NoContentScreen></NoContentScreen>;
  } else {
    return <div className={styles.container}> {cases} </div>;
  }
}

export default ContentPanel;
