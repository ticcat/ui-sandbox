import { useState } from "react";

export function useRepo() {
  const [repo, setRepo] = useState("");
  const isGithubActions = process.env.GITHUB_ACTIONS || false;

  if (isGithubActions && repo === "") {
    setRepo(process.env.CODESPACE_NAME);
    console.log(
      "==================== REPO NAME ====================" +
        process.env.CODESPACE_NAME
    );
  }

  return repo;
}
