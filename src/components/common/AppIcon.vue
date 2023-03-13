<template>
  <div
    class="app-icon"
    @click="executeMethod"
  >
    <img :src="getImgSrc(icon)">
  </div>
</template>
<script>
export default {
  name: "AppIcon",

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  emits: ["execute-method"],
  methods: {
    getImgSrc(icon) {
      if (icon) {
        var images = require.context("@/assets/images/svg/", false, /\.svg$/);
        return images("./" + icon + ".svg");
      }
    },
    executeMethod() {
      this.$emit("execute-method");
    },
  },
};
</script>
<style lang="scss" scoped>
    .app-icon {
        padding-right: $default-size;
        cursor: pointer;
    }
</style>
