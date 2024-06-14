const url = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
export const newDeployment = {
  name: "monorepo-client-app",
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
  name: "monorepo-client-app",
  buildCommand: "npm run build",
  commandForIgnoringBuildStep: "npm run build",
  devCommand: "npm run dev",
  environmentVariables: [],
  framework: "nextjs",
  gitRepository: {
    repo: url,
    type: "github",
    sourceless: true
  },
  installCommand: "npm install --prefix=../..",
  outputDirectory: "Next.js default",
  publicSource: true,
  rootDirectory: "packages/client-app",
  serverlessFunctionRegion: null,
  serverlessFunctionZeroConfigFailover: false,
  skipGitConnectDuringLink: true
};
