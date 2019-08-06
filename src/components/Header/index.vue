<template>
  <header>
    <Container>
      <h1>Transcriptions</h1>
      <nav>
        <button v-on:click="uploadData">upload</button>
        <button v-on:click="loadData">download</button>
      </nav>
    </Container>
  </header>
</template>

<script>
import { mapActions } from "vuex";

import Container from '@/components/ui/Container';

import { ACTIONS } from "@/store/modules/transcriptions/constants";

export default {
  name: "Header",

  components: {
    Container
  },

  methods: mapActions("transcriptions", {
    loadData: ACTIONS.LOAD,
    uploadData: ACTIONS.SAVE
  })
};
</script>

<style scoped lang="scss">
header {
  height: 100%;
  max-height: $rules-header-height;
  background-color: $color-header-bg;
  box-shadow: $box-shadow-default;
  box-sizing: border-box;

  > div {
    padding: $rules-gutter;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    *:last-child {
      margin-left: $rules-gutter;
    }
  }
}
</style>
