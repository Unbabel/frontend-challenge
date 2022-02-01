<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Montserrat');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1024px;
  margin: 40px auto;
  border: 2px solid #E0E0E0;
}
.container-max-width {
  max-width: 768px;
  margin: auto;
}
</style>
