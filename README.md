This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- Project Structureing -->

1. nvmrc => specifing the lts version for the project node 16 == Gallium ($ node -pe process.release.lts)
2. npmrc => setting the engine to strict mode in order for it to using our configuration
3. "engines": {
   "node": ">=16.0.0",
   "yarn": ">=1.22.0",
   "npm": "please-use-yarn"
   },
   node => support node version for the project
   yarn => support yarn version for the project
   npm => only use yarn for this project
4. ESlint configuration(.eslintrc.json)
5. Git hooks runs on different stages of the git process
   To do that we need to add a tool called husky
    (i) npx husky add .husky/pre-commit "yarn lint"
      This is done to that for every commit we automatically
      run yarn lint. to be sure we don't have lint error before the
      code is been commited
    (ii)npx husky add .husky/pre-push "yarn build"
      This is done to that before we push, we are able to run a successful
      build
6. Add prepare to our scripts in pakage.json
  prepare is a special script  that runs wheneven we run yarn install or npm install 
7: Add a linter to our commit messages, so make sure that our commit messages between
  members of our team  are consistent.
  @commitlint/cli is what is going to enforce the commit
  @commitlint/config-conventational  is the preconfigured setting, standard that developers use

  (i) To enable our commit lint we do this npx husky add .husky/commit-msg 'npx --no -- commit --edit "$1"'

8. VSCODE configuration
  (i) create a .vscode/setting.json, here we tell vscode to usig prettier extension has it default code formatter
  (ii) create a .vscode/launc.json, where we create a debugging script for vscode
    automatically configuration for lauching different kind of configuration modes, nextJs on this site provides this configuration(https://nextjs.org/docs/advanced-features/debugging)
  (iii) add automatic debugging evnironent when running on the dev environment to do that we add a package called cross-env(yarn  add -D cross-env)
  (iv) We have to update our package.json 
    {"scripts": {"dev" : "next dev"}}
    TO
    {"scripts": {"dev" : "cross-env NODE_OPTIONS='--inspect' next dev"}}
  
    this allows us to inspect server-side logs in the browser when running in development mode, as this may cause some security issues if you are running on production environment
9. Directory structure
  1. component 
  2. lib folder
10. Storybook for testing
  Storybook is more of visual compare to e2e or unit testing library
  it is not a dependency becos it does so many things, it create so many configuration and file within our project so therefore we run with npx package manager (npx sb init --builder webpack5) and we will be using the webpack 5 builder

  (i) configure eslint.json for story book
    "extends": ["plugin:storybook/recommended"],
    also the override configuration from story book documentation

    "overrides": [
    {
      "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      // example of overriding a rule
      // "storybook/hierarchy-separator": "error"
    }
  ]
  as of this time the storybook/hierarchy-separator" was depreciated in storybook verson 6 (read more at https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/hierarchy-separator.md)

10. Edit the package.json to ensure that storybook is using webpack5 builder
  "resolutions": {
    "webpack": "^5"
  }
  because of this change we need to do "yarn install" in order to make our tool use webpack5 builder

  (i) update the .storybook/main.js
    Changed the story patterns we don't want to import story only from the story directory, but put them in the component themselves
    "stories": [
      "../**/*.stories.mdx",
      "../**/*.stories.@(js|jsx|ts|tsx)"
    ],
  (ii) We need to tell story book where our static assets directory is located
  (iii) Edit the .storybook/preview.js => where especially if we are working with   nextjs file we need to tell story book how to work with nextjs specific image component
  
  Issue Faced When Using Storybook for webpack5 was that i neeed at fallback util.
  (
    error-message: If you want to include a polyfill, you need to: - add a fallback 'resolve.fallback: { "util": require.resolve("util/") }' - install 'util'
  ) 
  This was achieved by doing the following.
  - Install the util dependency (yarn add util)
  - Create a webpack.config.js file in the root directory
  - add the below to the config file (refernce: https://stackoverflow.com/questions/64402821/module-not-found-error-cant-resolve-util-in-webpack)
    module.exports = {
      // ...
      resolve: {
          fallback: {
            util: require.resolve("util/")
          }
      }
      // ...
    };
11. Componenet Templating
   -Base Templating
   -Story Book
   -Image Domain Validation

12. Layout

13. Adding tailwind configure to storybook
  1. yarn add -D @storybook/addon-postcss
  2. yarn add -D storybook-css-modules-preset // if you ar using modules css styling pattern