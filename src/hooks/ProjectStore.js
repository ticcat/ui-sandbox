import ValorantButton from "@/app/buttons/cases/ValorantButton/ValorantButton";
import DualQuarterCircleSpinner from "@/app/loadingAnims/cases/DualQuarterCircleSpinner/DualQuarterCircleSpinner";
import { create } from "zustand";

function Project(id, name, path, cases) {
  return {
    id: id,
    name: name,
    path: path,
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
  Project("buttons", "Buttons", "/buttons", [
    ProjectCase(
      "valorantButton",
      "Valorant button",
      <ValorantButton></ValorantButton>
    ),
  ]),
  Project("loadingAnims", "Loading animations", "/loadingAnims", [
    ProjectCase(
      "dualQuarterCircleSpinner",
      "Dual spinner",
      <DualQuarterCircleSpinner></DualQuarterCircleSpinner>
    ),
  ]),
  Project("todoApp", "Todo app", "/todo"),
];

export const useProjectStore = create((set) => ({
  projects: projectsList,
  getProjectByPath: (path) => {
    return projectsList.find((it) => it.path === path);
  },
}));
