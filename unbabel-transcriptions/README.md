## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes, to do so clone this repo:

```bash
git clone https://github.com/gdsrosa/frontend-challenge.git
cd unbabel-transcriptions
```

### Installing

Assuming you have all the Node.js and NPM environment setup in your machine:

Let's install the dependencies

```bash
npm install
```

### Setup .env

To be able to fetch to the API please create a `.env` file on the root of the project:

```bash
touch .env
```

An then add this line on your `.env` file:

```bash
VITE_API_URL="http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c"
```

## Running the application in development mode

To start the application run:

```bash
npm run dev
```

## Running the tests

To execute the unit tests:

```bash
npm run test
```

## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Built With

- [ES6](http://es6-features.org/#Constants) - The programming language used for the Client
- [VueJS](https://vuejs.org/) - The UI library used for the Client
- [NPM](http://npmjs.org) - Dependency Management
- [Vitest](https://vitest.dev/) - JavaScript Unit Test tool

## Author

- **Gabriel Rosa** - [gdsrosa](https://github.com/gdsrosa)
