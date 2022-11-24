<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';
import { IData } from './utils/Data.model';
import * as DataAPI from "./utils/DataAPI";

@Options({
  components: {
    Header
  },
})
export default class App extends Vue {

  async created(): Promise<void> {
    const res: IData[] = await DataAPI.getData();
    console.log(res);
  }
}
</script>

<template>
  <div class="app">
    <Header />
  </div> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #404243;
}

body {
  margin: 0;
  background-color: #ededed;
}
</style>
