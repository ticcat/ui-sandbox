"use client";

import { useProjectStore } from "@/hooks/ProjectStore";
import styles from "./ContentPanel.module.css";
import { usePathname } from "next/navigation";

const testProjects = [
  <ContentCard key={1}>Test 1</ContentCard>,
  <ContentCard key={2}>Test 2</ContentCard>,
  <ContentCard key={3}>Test 3</ContentCard>,
  <ContentCard key={4}>Test 4</ContentCard>,
  <ContentCard key={5}>Test 5</ContentCard>,
  <ContentCard key={1}>Test 1</ContentCard>,
  <ContentCard key={2}>Test 2</ContentCard>,
  <ContentCard key={3}>Test 3</ContentCard>,
  <ContentCard key={4}>Test 4</ContentCard>,
];

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

  return (
    <div className={styles.container}>
      {cases.length === 0 ? testProjects : cases}
    </div>
  );
}

export default ContentPanel;
