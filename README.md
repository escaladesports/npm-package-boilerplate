# npm-package-boilerplate
A boilerplate for creating NPM packages (new 2020)

Uses Babel and Jest, comes with the following scripts by default:  
- `yarn build` – transpiles all files in `src` and outputs to `dist`
- `yarn test` – runs Jest (assuming any files use it; see example in `src`)


## Adding a new package to a monorepo:  
1. Clone this repo **outside** the monorepo folder
2. Edit this repo's `package.json` to have the desired package name, version, etc.
3. Edit `.npmrc` to have the desired version tag prefix for Git (e.g. *zygote-plugin-whatever@*)
4. `cd` into monorepo
5. Run `lerna import ../npm-package-boilerplate`
