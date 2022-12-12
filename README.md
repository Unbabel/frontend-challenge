# Frontend challenge solution

## Reproduce solution instructions - npm way
1) Run following commands:
```sh
npm install

npm run dev
```
2) Open it locally by this [app link](http://localhost:9090)

## Reproduce solution instructions - yarn way
1) Run following commands:
```sh
yarn

yarn dev
```
2) Open it locally by this [app link](http://localhost:9090)

## Reproduce solution instructions - docker way

1) Run the following command to reproduce locally (be sure that your port 9090 is free):

``docker build -t frontend-challenge-sanyaches .``

``docker run -dp 9090:9090 frontend-challenge-sanyaches``

2) Open it locally by this [app link](http://localhost:9090)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
