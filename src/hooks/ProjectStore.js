import { create } from "zustand";

const projectsList = [
  Project("buttons", "Buttons", "/buttons"),
  Project("loadingAnims", "Loading Animations", "/loadingAnims"),
];

export const useProjectStore = create((set) => ({
  projects: projectsList,
  addProject: (newProject) =>
    set((state) => {
      state.projects.push(newProject);
    }),
  addProjects: (newProjects) =>
    set((state) => {
      state.projects.concat(newProjects);
    }),
}));

function Project(id, name, href) {
  return {
    id: id,
    name: name,
    href: href,
  };
}
