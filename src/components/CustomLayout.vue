<template>
  <div>
    <NavigationHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationHeader from "@/components/NavigationHeader.vue";

export default {
  name: "CustomLayout",
  components: {
    NavigationHeader,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
