<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Base",
  components: {
    Header
  }
};
</script>

<style>
div {
  width: inherit;
  height: inherit;
}
</style>
