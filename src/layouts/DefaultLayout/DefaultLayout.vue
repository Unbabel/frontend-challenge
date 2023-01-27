<template>
  <main class="qa-default-layout o-default-layout">
    <TopMenu title="Transcriptions" class="o-default-layout__menu">
      <!-- <router-link to="/">Go to Home</router-link>-->
      <!-- To Simulate reaching error page -->
      <!-- <router-link to="/spain">Go to Spain</router-link> -->
      <Button title="Upload" icon="upload" @click="POST_LIST(LIST)" />
      <Button title="Download" icon="fetch-document" @click="GET_LIST" />
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
@import "../../assets/styles/variables.scss";

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
    margin: 10px 0;
  }
  @media only screen and (max-width: "640px") {
    grid-template-columns: 1fr;
    .o-default-layout__content,
    .o-default-layout__menu {
      grid-column: auto;
    }
  }
}
</style>
