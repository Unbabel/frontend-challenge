<template>
  <div id="app">
    <NavbarMenu/>
    <ListContent/>
  </div>
</template>

<script>
import NavbarMenu from "./components/NavbarMenu.vue";
import ListContent from "./components/ListContent.vue";

export default {
  name: "app",
  components: {
    NavbarMenu,
    ListContent
  }
};
</script>

<style lang="scss">
@import "assets/style/main.scss";

* {
  color: $color-main;
}
</style>
