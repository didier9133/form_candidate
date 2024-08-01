import {
  App,
  GitHubSourceCodeProvider,
  Platform,
  RedirectStatus,
} from "@aws-cdk/aws-amplify-alpha";
import { SecretValue, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BuildSpec } from "aws-cdk-lib/aws-codebuild";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, "gestores", {
      appName: "344 project",
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "",
        repository: "",
        oauthToken: SecretValue.secretsManager("github-token-cdk"),
      }),
      autoBranchDeletion: true,
      platform: Platform.WEB_COMPUTE,
      environmentVariables: {
        NEXT_PUBLIC_BASE_URL:"",
        NEXT_PUBLIC_STREAM_VIDEO_API_KEY:"",
        STREAM_VIDEO_API_SECRET:"",
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:"",
        CLERK_SECRET_KEY:""
      },
      customRules: [
        {
          source: "/<*>",
          target: "/index.html",
          status: RedirectStatus.NOT_FOUND_REWRITE,
        },
      ],
      buildSpec: BuildSpec.fromObject({
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: ["npm ci"],
            },
            build: {
              commands: ["npm run build"],
            },
          },
          artifacts: {
            baseDirectory: ".next",
            files: ["**/*"],
          },
          cache: {
            paths: ["node_modules/**/*"],
          },
        },
      }),
    });

    amplifyApp.addBranch("main", {
      stage: "PRODUCTION",
    });

  }
}
