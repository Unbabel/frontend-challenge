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
  width: 100%;
}

body {
  max-width: 100vw;
  max-height:100vh;
  display: flex;
  justify-content: center;
  background-color: $concrete;
}
</style>
