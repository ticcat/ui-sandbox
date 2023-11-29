import SlideTopBotButton from "@/app/buttons/cases/SlideTopBotButton/SlideTopBotButton";
import StickyBubbleBurguerButton from "@/app/buttons/cases/StickyBubbleBurguerButton/StickyBubbleBurguerButtton";
import ValorantButton from "@/app/buttons/cases/ValorantButton/ValorantButton";
import DualQuarterCircleSpinner from "@/app/loadingAnims/cases/DualQuarterCircleSpinner/DualQuarterCircleSpinner";
import HBOLoader from "@/app/loadingAnims/cases/HBOLoader/HBOLoader";
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
    ProjectCase(
      "stickyBubbleBurguerButton",
      "Dennis burguer button",
      <StickyBubbleBurguerButton></StickyBubbleBurguerButton>
    ),
    ProjectCase(
      "slideTopBotButton",
      "Slide top bot button",
      <SlideTopBotButton></SlideTopBotButton>
    ),
  ]),
  Project("loadingAnims", "Loading animations", "/loadingAnims", [
    ProjectCase(
      "dualQuarterCircleSpinner",
      "Dual spinner",
      <DualQuarterCircleSpinner></DualQuarterCircleSpinner>
    ),
    ProjectCase("hboLoader", "HBO loader", <HBOLoader></HBOLoader>),
  ]),
];

export const useProjectStore = create((_) => ({
  projects: projectsList,
  getProjectByPath: (path) => {
    return projectsList.find((it) => it.path === path);
  },
}));
