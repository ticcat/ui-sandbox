/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePatch = "/";

if (isGithubActions) {
  assetPrefix = "/ui-sandbox/";
  basePatch = "/ui-sandbox";
}

const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePatch: basePatch,
};

module.exports = nextConfig;
