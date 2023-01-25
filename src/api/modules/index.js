import camelCase from "lodash/camelCase";

const modules = {};
const indexFileName = "./index.js";

//automaticly extract js files inside the modules folder
const requireModule = require.context(".", false, /\.js$/);

requireModule.keys().forEach((fileName) => {
  //reject the index.js file
  if (fileName === indexFileName) {
    return;
  }

  const modulesName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
  modules[modulesName] = requireModule(fileName).default;
});

export default modules;
