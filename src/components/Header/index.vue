<template>
  <header>
    <h1>Transcriptions</h1>
    <nav>
      <button v-on:click="uploadData">upload</button>
      <button v-on:click="loadData">download</button>
    </nav>
  </header>
</template>

<script>
import { ACTIONS } from "@/store/modules/transcriptions/constants";

export default {
  name: "Header",
  methods: {
    loadData: function() {
      this.$store.dispatch(ACTIONS.LOAD);
    },
    uploadData: function() {
      this.$store.dispatch(ACTIONS.SAVE);
    }
  }
};
</script>

<style scoped lang="scss">
header {
  nav {
    border: 1px solid red;
  }
}
</style>
