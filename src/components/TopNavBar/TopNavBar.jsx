"use client";

import style from "./TopNavBar.module.css";
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
      onClickHandler={() => router.push(project.path)}
    >
      {project.name}
    </NavBarButton>
  ));

  return (
    <>
      <div className={style.floatingContainer}>
        <HomeButton
          iconName="homeIcon"
          onClickHandler={() => router.push("/")}
        ></HomeButton>
        <HomeButton
          iconName="sadFace"
          onClickHandler={() => router.push("/")}
        ></HomeButton>
      </div>
      <div className={style.container}>{projectButtons}</div>
    </>
  );
}
