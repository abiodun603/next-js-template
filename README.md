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
