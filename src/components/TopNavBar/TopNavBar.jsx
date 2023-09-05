"use client";

import styles from "./TopNavBar.module.css";
import NavBarButton from "@/components/AppButton/AppButton";
import HomeButton from "../HomeButton/HomeButton";
import { useProjectStore } from "@/hooks/ProjectStore";
import { useRouter } from "next/navigation";

export default function TopNavBar() {
  const router = useRouter();

  const projects = useProjectStore((state) => state.projects);
  const projectButtons = projects.map((project) => (
    <NavBarButton
      key={project.id}
      onClickHandler={() => handleClick(project.path)}
    >
      {project.name}
    </NavBarButton>
  ));

  function handleClick(path) {
    router.push(path);
  }

  return (
    <>
      <HomeButton></HomeButton>
      <div className={styles.container}>{projectButtons}</div>
    </>
  );
}
