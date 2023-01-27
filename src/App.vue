<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./assets/styles/variables.scss";
@import "./assets/styles/transitions.scss";

#app {
  font-family: $open-sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-color: lighten($color: $third-color, $amount: 45);
}

body {
  margin: 0;
}
</style>
