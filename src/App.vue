<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
}
</script>

<template>
  <div class="app">
  <router-view />
  </div> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #404243;
  margin: 10px;
  border: 2px solid lightgrey;
  background: #f0f3f3;  
}

body {
  margin: 0;
  background-color: #ededed;
}
</style>
