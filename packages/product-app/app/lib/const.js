export const newDeployment = {
  name: "vercel-client-domain-app",
  deploymentId: "123456",
  gitSource: {
    ref: "master",
    repoId: 814529021,
    type: "github"
  },
  source: "import",
  target: "production",
  withLatestCommit: true
};

export const newProject = {
  name: "vercel-client-domain-app",
  buildCommand: "npm run build",
  commandForIgnoringBuildStep: "npm run build",
  devCommand: "npm run dev",
  environmentVariables: [],
  framework: "nextjs",
  gitRepository: {
    repo: "https://github.com/sagar-vaghela/product-monorepo-poc",
    type: "github"
  },
  installCommand: "npm install --prefix=../..",
  outputDirectory: "Next.js default",
  publicSource: true,
  rootDirectory: "packages/client-app",
  serverlessFunctionRegion: null,
  serverlessFunctionZeroConfigFailover: false,
  skipGitConnectDuringLink: true
};
