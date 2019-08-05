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
import { mapActions } from "vuex";

import { ACTIONS } from "@/store/modules/transcriptions/constants";

export default {
  name: "Header",

  methods: mapActions("transcriptions", {
    loadData: ACTIONS.LOAD,
    uploadData: ACTIONS.SAVE
  })
};
</script>

<style scoped lang="scss">
header {
  nav {
    border: 1px solid red;
  }
}
</style>
