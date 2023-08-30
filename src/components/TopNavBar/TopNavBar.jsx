"use client";

import styles from "./TopNavBar.module.css";
import NavBarButton from "@/components/NavBarButton/NavBarButton";
import HomeButton from "../HomeButton/HomeButton";
import { useProjectStore } from "@/hooks/ProjectStore";

function TopNavBar() {
  const projects = useProjectStore((state) => state.projects);
  const projectButtons = projects.map((project) => (
    <NavBarButton key={project.id} href={project.path}>
      {project.name}
    </NavBarButton>
  ));

  return (
    <>
      <HomeButton></HomeButton>
      <div className={styles.container}>{projectButtons}</div>
    </>
  );
}

export default TopNavBar;
