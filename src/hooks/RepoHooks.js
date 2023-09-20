import { useState } from "react";

export function useRepo() {
  const [repo, setRepo] = useState("");
  const isGithubActions = process.env.GITHUB_ACTIONS || false;

  if (isGithubActions) {
    setRepo(process.env.REPO_NAME);
  }

  return repo;
}
