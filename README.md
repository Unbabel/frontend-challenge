# Unbabel Frontend Challenge by Alexandre Alves

## Project information
Some considerations regarding my resolution of this challenge:
- Since the HTML character for a checkmark (used in the checkbox component) was different than the one presented in the preview/design I decided to export from Sketch the SVG for the checkmark in order to keep the design requirements
- A loader could be added to the project to further enhance the UX while the user is waiting for server operations (GET, POST, etc). This was not done
- We could breakdown the store (VueX) into different files for each store module (in our case the transcriptions) if it gets too big (https://vuex.vuejs.org/guide/structure.html) but that was not done because the store module is quite simple and with small code
- Created an error message component in order to pass error messages to the UI when an error occurs. (ex: server requests). Activation of this component is done on the transcriptions store module. On a bigger application, this should adapted in order to fit all future modules (a service function, for example)
- Created a general config file in order to store all common config variables that are used throughout the application
- Adapted base folder structure to show how we could organize the project's structure if the project scales
- Created some animations using Vue transitions for the transcription list items and for the error messages component just to showcase how transitions can be used on Vue
- Did not create the Vue project with unit testing tools (Jest or Mocha) because I have had almost no contact with TDD in my career, so no testing was included on my project

## Project requirements
- Use node version 8.9 or above (developed on node v8.9.4)

## Previewing build locally
The dist directory is meant to be served by an HTTP server (unless you've configured baseUrl to be a relative value), so it will not work if you open dist/index.html directly over file:// protocol. The easiest way to preview your production build locally is using a Node.js static file server, for example serve:

```
npm run build
# compile production version

npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem above

serve -s dist
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
