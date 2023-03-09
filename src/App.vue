<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0;
  max-width: 100vw;
  max-height:100vh;
  background-color: $concrete;
  overflow-x: hidden;
}
</style>
