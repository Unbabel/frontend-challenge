<template>
  <nav v-if="isNavEnabled">
    <router-link to="/">Home</router-link> |
    <router-link to="/transcriptions">Transcriptions</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {
  private isNavEnabled = false;
}
</script>

<style lang="scss">
@import "normalize-scss/sass/normalize/import-now";
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
}
</style>
