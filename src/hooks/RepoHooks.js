import { useState } from "react";

export function useRepo() {
  const [repo, setRepo] = useState("");
  const isGithubActions = process.env.GITHUB_ACTIONS || false;

  if (isGithubActions && repo === "") {
    setRepo(process.env.GITHUB_REPOSITORY.substring(6));
    console.log(
      "==================== REPO NAME ====================" +
        process.env.GITHUB_REPOSITORY.substring(6)
    );
  }

  return repo;
}
