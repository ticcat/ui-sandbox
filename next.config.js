/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "/";
let basePatch = "";

if (isGithubActions) {
  const repo = process.env.REPO_NAME;
  assetPrefix = `ui/${repo}/`;
  basePatch = `ui/${repo}`;
}

const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePatch: basePatch,
};

module.exports = nextConfig;
