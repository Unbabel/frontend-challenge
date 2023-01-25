<template>
  <main class="qa-default-layout o-default-layout">
    <TopMenu title="My Title" type="h1" class="o-default-layout__menu">
      <!-- <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link> -->
      <Button icon="upload" @click="POST_LIST(LIST)" />
      <Button icon="fetch-document" @click="GET_LIST" />
    </TopMenu>
    <div class="o-default-layout__content">
      <slot />
    </div>
  </main>
</template>

<script>
import TopMenu from "@/components/TopMenu/TopMenu.vue";
import Button from "@/components/Button/Button.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "DefaultLayout",
  computed: {
    ...mapGetters("list/", ["LIST"]),
  },
  methods: {
    ...mapActions("list/", ["GET_LIST", "POST_LIST"]),
  },
  components: {
    TopMenu,
    Button,
  },
};
</script>

<style lang="scss">
.o-default-layout {
  //Add media queries
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 1fr;
  .o-default-layout__menu {
    grid-row: 1;
    grid-column: 1/6;
  }
  .o-default-layout__content {
    grid-column: 2 / 5;
  }
}
</style>
