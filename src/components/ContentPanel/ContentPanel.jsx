"use client";

import { useProjectStore } from "@/hooks/ProjectStore";
import { usePathname } from "next/navigation";
import NoContentScreen from "../NoContentScreen/NoContentScreen";
import style from "./ContentPanel.module.css";

function ContentCard({ name, component, size }) {
  return (
    <div
      className={`${style.card} ${size === "big" ? style.big : style.normal}`}
    >
      <div className={style.preview}>{component}</div>
      <h2 className={style.title}>{name}</h2>
    </div>
  );
}

export default function ProjectsPanel() {
  const getProjectByPath = useProjectStore((state) => state.getProjectByPath);

  const path = usePathname();
  const cases = getProjectByPath(path).cases.map((it) => (
    <ContentCard
      key={it.id}
      name={it.name}
      component={it.baseComponent}
      size={it.cardSize}
    ></ContentCard>
  ));

  if (cases.length === 0) {
    return <NoContentScreen title="No study cases yet"></NoContentScreen>;
  } else {
    return <div className={style.container}> {cases} </div>;
  }
}
