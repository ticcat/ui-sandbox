"use client";

import { useProjectStore } from "@/hooks/ProjectStore";
import { usePathname } from "next/navigation";
import styles from "./ContentPanel.module.css";

function NoContentScreen() {
  return (
    <div className={styles.noCaseContainer}>
      <p className={styles.title}>No study cases yet</p>
      <p className={styles.sadFace}>😔</p>
    </div>
  );
}

function ContentCard({ name, component }) {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>{component}</div>
      <h2 className={styles.title}>{name}</h2>
    </div>
  );
}

function ContentPanel() {
  const getProjectByPath = useProjectStore((state) => state.getProjectByPath);

  const path = usePathname();
  const cases = getProjectByPath(path).cases.map((it) => (
    <ContentCard
      key={it.id}
      name={it.name}
      component={it.baseComponent}
    ></ContentCard>
  ));

  if (cases.length === 0) {
    return <NoContentScreen></NoContentScreen>;
  } else {
    return <div className={styles.container}> {cases} </div>;
  }
}

export default ContentPanel;
