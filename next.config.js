/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "/";
let basePatch = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.substring(6);
  assetPrefix = `/${repo}/`;
  basePatch = `/${repo}`;
}

const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePatch: basePatch,
};

module.exports = nextConfig;
