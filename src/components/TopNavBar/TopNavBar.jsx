"use client";

import styles from "./TopNavBar.module.css";
import NavBarButton from "@/components/NavBarButton/NavBarButton";
import HomeButton from "../HomeButton/HomeButton";
import { useProjectStore } from "@/hooks/ProjectStore";

function TopNavBar() {
  const projects = useProjectStore((state) => state.projects);
  const projectButtons = [];

  projects.forEach((project) => {
    projectButtons.push(
      <NavBarButton key={project.id} href={project.href}>
        {project.name}
      </NavBarButton>
    );
  });

  return (
    <>
      <HomeButton></HomeButton>
      <div className={styles.container}>{projectButtons}</div>
    </>
  );
}

export default TopNavBar;
