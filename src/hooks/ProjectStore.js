import RenxaMenuButton from "@/app/buttons/cases/RenxaMenu/RenxaMenuButton";
import SlideTopBotButton from "@/app/buttons/cases/SlideTopBot/SlideTopBotButton";
import StickyBubbleBurguerButton from "@/app/buttons/cases/StickyBubbleBurguer/StickyBubbleBurguerButtton";
import ValorantButton from "@/app/buttons/cases/Valorant/ValorantButton";
import DualQuarterCircleSpinner from "@/app/anims/cases/DualQuarterCircleSpinner/DualQuarterCircleSpinner";
import HBOLoader from "@/app/anims/cases/HBOLoader/HBOLoader";
import { create } from "zustand";
import RotatingGlobe from "@/app/anims/cases/RotatingGlobe/RotatingGlobe";
import ChangeOnHoverButton from "@/app/buttons/cases/ChangeOnHover/ChangeOnHover";

function Project(id, name, path, cases) {
  return {
    id: id,
    name: name,
    path: path,
    cases: cases,
  };
}

function ProjectCase(id, name, baseComponent, cardSize = "normal") {
  return {
    id: id,
    name: name,
    baseComponent: baseComponent,
    cardSize: cardSize,
  };
}

const projectsList = [
  Project("buttons", "Buttons", "/buttons", [
    ProjectCase(
      "valorantButton",
      "Valorant",
      <ValorantButton></ValorantButton>
    ),
    ProjectCase(
      "stickyBubbleBurguerButton",
      "Dennis burguer",
      <StickyBubbleBurguerButton></StickyBubbleBurguerButton>
    ),
    ProjectCase(
      "slideTopBotButton",
      "Slide top bot",
      <SlideTopBotButton></SlideTopBotButton>
    ),
    ProjectCase(
      "renxaMenuButton",
      "Renxa menu",
      <RenxaMenuButton></RenxaMenuButton>
    ),
    ProjectCase(
      "changeOnHoverButton",
      "Change on hover",
      <ChangeOnHoverButton></ChangeOnHoverButton>
    ),
  ]),
  Project("anims", "Animations", "/anims", [
    ProjectCase(
      "dualQuarterCircleSpinner",
      "Dual spinner",
      <DualQuarterCircleSpinner></DualQuarterCircleSpinner>
    ),
    ProjectCase("hboLoader", "HBO loader", <HBOLoader></HBOLoader>),
    ProjectCase(
      "rotatingGlobe",
      "Rotating globe",
      <RotatingGlobe></RotatingGlobe>
    ),
  ]),
];

export const useProjectStore = create((_) => ({
  projects: projectsList,
  getProjectByPath: (path) => {
    return projectsList.find((it) => it.path === path);
  },
}));
