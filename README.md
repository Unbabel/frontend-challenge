#Unbabel Frontend Challenge

<div align="center">
    <!-- Dependency Status -->
    <a href="https://david-dm.org/migcarva/frontend-challenge">
        <img src="https://david-dm.org/migcarva/frontend-challenge.svg" alt="Dependency Status" />
    </a>
    <!-- devDependency Status -->
    <a href="https://david-dm.org/migcarva/frontend-challenge#info=devDependencies">
        <img src="https://david-dm.org/migcarva/frontend-challenge/dev-status.svg" alt="devDependency Status" />
    </a>
    <!-- Build Status -->
    <a href="https://travis-ci.org/migcarva/frontend-challenge">
        <img src="https://travis-ci.org/migcarva/frontend-challenge.svg" alt="Build Status" />
    </a>
</div>

## Instalation

```Shell
npm i
```

## Development

```Shell
npm run start
```

Starts the development server running on `http://localhost:3000`

### Production

```Shell
npm run start:production
```

- Runs tests (see `npm test`)
- Builds your app (see `npm run build`)
- Starts the production server (see `npm run start:prod`)

The app is built for optimal performance: assets are
minified and served gzipped.

### Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command
with `--`. E.g. to make the app visible at `my-local-hostname:5000`, run the following:
`npm start -- --host my-local-hostname --port 5000`

## Building

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to your web server to
see your work live!

## Testing

See the [testing documentation](../testing/README.md) for detailed information
about our testing setup!

## Unit testing

```Shell
npm test
```

Tests your application with the unit tests specified in the `**/tests/*.js` files
throughout the application.  
All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest. Useful if you need to run a specific test only.

```Shell
# Run only the Button component tests
npm test -- Button
```

### Watching

```Shell
npm run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

### Remote testing

```Shell
npm run start:tunnel
```

Starts the development server and tunnels it with `ngrok`, making the website
available worldwide. Useful for testing on different devices in different locations!

### Dependency size test

```Shell
npm run analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/) or [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

## Linting

```Shell
npm run lint
```

Lints your JavaScript and your CSS.

```Shell
npm run lint:eslint:fix -- .
```

Lints your code and tries to fix any errors it finds.
