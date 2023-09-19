/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePatch = "/";

if (isGitHubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePatch = `/${repo}`;
}

const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePatch: basePatch,
};

module.exports = nextConfig;
