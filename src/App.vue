<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';
import ListItems from './components/ListItems.vue';

@Options({
  components: {
    Header,
    ListItems
  },
})
export default class App extends Vue {
}
</script>

<template>
  <div class="app">
    <Header />
    <ListItems />
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
}

body {
  margin: 0;
  background-color: #ededed;
}
</style>
