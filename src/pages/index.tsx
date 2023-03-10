import Table from "@/components/table";
import Head from "next/head";
import { PropsWithChildren } from "react";

const Code = (props: PropsWithChildren) => (
  <code className="rounded bg-slate-200 p-1">{props.children}</code>
);

const commands: (string | JSX.Element)[][] = [
  [
    <Code>yarn dev</Code>,
    "Run the NextJS application in a local development environment.",
  ],
  [<Code>yarn lint</Code>, "Runs eslint within NextJS."],
  [<Code>yarn format</Code>, "Runs 'Prettier' on the ./src directory."],
  [
    <Code>yarn format:fix</Code>,
    "Runs 'Prettier' on the ./src directory and makes automatic corrections.",
  ],
  [
    <Code>yarn storybook</Code>,
    "Builds the Storybook prototyping engine and launches the browser.",
  ],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen">
        <div className="my-4 flex w-full items-center justify-center">
          <span className="text-3xl font-bold">NextJS Template</span>
        </div>
        <div className="mx-auto flex w-4/6 flex-col items-start justify-start rounded p-4 shadow shadow-slate-600">
          <div className="my-4 flex flex-col">
            <span className="mb-2 text-xl">Getting Started</span>
            <span className="mb-2">
              Edit this page at <Code>./src/pages/index.tsx</Code>.
            </span>
            <p>
              This repository is a pre-built template for NextJS projects. It
              has common functionality configured for most use cases.
            </p>
          </div>
          <div className="my-4 flex w-full flex-col">
            <span className="mb-2 text-xl">Scripts</span>
            <p>
              The following scripts are configured in <code>package.json</code>.
            </p>
            <Table head={["Command", "Description"]} rows={commands} />
          </div>
          <div className="my-4 flex flex-col">
            <span className="mb-2 text-xl">Features</span>
            <ul className="ml-4">
              <li className="list-disc">Linting</li>
              <li className="list-disc">Git hooks</li>
              <li className="list-disc">Storybook prototyping</li>
              <li className="list-disc">Tailwind CSS integration</li>
              <li className="list-disc">
                Jest unit testing with code coverage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
