"use client";

import style from "./TopNavBar.module.css";
import NavBarButton from "@/components/AppButton/AppButton";
import ShowableButton from "../ShowableButton/ShowableButton";
import { useProjectStore } from "@/hooks/ProjectStore";
import { usePathname, useRouter } from "next/navigation";

export default function TopNavBar() {
  const router = useRouter();
  const path = usePathname();

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
        <ShowableButton
          show={path === "/"}
          iconName="homeIcon"
          onClickHandler={() => router.push("/")}
        ></ShowableButton>
        <ShowableButton
          show={path === "/"}
          iconName="sadFace"
          onClickHandler={() => router.push("/")}
        ></ShowableButton>
      </div>
      <div className={style.container}>{projectButtons}</div>
    </>
  );
}
