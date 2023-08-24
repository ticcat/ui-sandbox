"use client";

import styles from "./TopNavBar.module.css";
import NavBar from "@/components/NavBar/NavBar";
import { useProjectStore } from "@/hooks/ProjectStore";
import NavBarButton from "@/components/NavBarButton/NavBarButton";
import { usePathname, useRouter } from "next/navigation";

function TopNavBar() {
  const path = usePathname();
  const router = useRouter();

  const projects = useProjectStore((state) => state.projects);
  const projectButtons = [];

  const isHome = path === "/";

  projects.forEach((project) => {
    projectButtons.push(
      <NavBarButton key={project.id} href={project.href}>
        {project.name}
      </NavBarButton>
    );
  });

  return (
    <div className={styles.main}>
      <NavBar>
        {!isHome && <button onClick={() => router.push("/")}>⌂</button>}
        {projectButtons}
      </NavBar>
    </div>
  );
}

export default TopNavBar;
