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

    const amplifyApp = new App(this, "344 gestores", {
      appName: "Nextjs hosting example",
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "",
        repository: "",
        oauthToken: SecretValue.secretsManager(""),
      }),
      autoBranchDeletion: true,
      platform: Platform.WEB_COMPUTE,
      environmentVariables: {
        NEXT_PUBLIC_BASE_URL:"http://localhost:3000",
        NEXT_PUBLIC_STREAM_VIDEO_API_KEY:"kcfdtxuvg56j",
        STREAM_VIDEO_API_SECRET:"qykmvezya8ef98yjc7dyknx3w4cx72nuqk4gvrvm2q6jdz5dr39sjvcesrd77kn3",
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:"pk_test_bmF0aXZlLWNvYnJhLTc5LmNsZXJrLmFjY291bnRzLmRldiQ",
        CLERK_SECRET_KEY:"sk_test_nsQ2MajRVFfxSPk5jXw4ZVzht72uR9exqKdNHkO5z0"
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
