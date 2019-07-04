<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/scss/reset.scss';
@import '@/scss/main.scss';

#app {
  background-color: $proj-bg;
  width: 100vw;
  height: 100vh;
}
</style>
