import ValorantButton from "@/app/buttons/cases/ValorantButton/ValorantButton";
import DualQuarterCircleSpinner from "@/app/loadingAnims/cases/DualQuarterCircleSpinner/DualQuarterCircleSpinner";
import { create } from "zustand";

function Project(id, name, path, isFullPage, cases) {
  return {
    id: id,
    name: name,
    path: path,
    isFullPage: isFullPage,
    cases: cases,
  };
}

function ProjectCase(id, name, baseComponent) {
  return {
    id: id,
    name: name,
    baseComponent: baseComponent,
  };
}

const projectsList = [
  Project("buttons", "Buttons", "/buttons", false, [
    ProjectCase(
      "valorantButton",
      "Valorant button",
      <ValorantButton></ValorantButton>
    ),
  ]),
  Project("loadingAnims", "Loading Animations", "/loadingAnims", false, [
    ProjectCase(
      "dualQuarterCircleSpinner",
      "Dual spinner",
      <DualQuarterCircleSpinner></DualQuarterCircleSpinner>
    ),
  ]),
];

export const useProjectStore = create((set) => ({
  projects: projectsList,
  getProjectByPath: (path) => {
    return projectsList.find((it) => it.path === path);
  },
}));
