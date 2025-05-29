# {{ project-name }}

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build

# Runs the end-to-end tests
pnpm test:e2e
# Runs the tests only on Chromium
pnpm test:e2e --project=chromium
# Runs the tests of a specific file
pnpm test:e2e tests/example.spec.ts
# Runs the tests in debug mode
pnpm test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Promoting Images

Upon each commit to main, the Docker image is built and deployed to the dev Kubernetes cluster automatically. However, the process to promote an image to stg or prd requires a couple of manual button presses, allowing you to control when to deploy images to other environments.

1. Launch a run of [**Cut Release Tag**](.github/workflows/cut-tag.yaml) — this will bump the version number of the application, publish a new docker image to Artifactory with the necessary tags, and create a new Github release from that tag. Make sure to select the appropriate level to bump, conforming with [semantic versioning](https://semver.org/).
2. Launch a run of [**Promote Tag**](.github/workflows/promote.yaml) — this will take an existing docker image and promote it to the specified environment. Make sure to enter the Github tag you wish to promote (created by **Cut Release Tag** from step one) and the environment to which you wish to promote the image.
