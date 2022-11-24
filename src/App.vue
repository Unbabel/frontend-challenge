<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IData } from './utils/Data.model';
import * as DataAPI from "./utils/DataAPI";

@Options({
  components: {},
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

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
