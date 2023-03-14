<template>
  <div id="app">
    <CustomLayout />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomLayout from "@/components/CustomLayout.vue";

export default {
  name: "App",
  components: {
    CustomLayout,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Open+Sans&display=swap");
body {
  margin: 0;
  padding: 0;
  background: #f5f9ff;
}
</style>
