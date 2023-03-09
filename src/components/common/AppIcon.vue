<template>
  <div
    class="app-icon"
    :placeholder="123"
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

  emits: ["executeMethod"],
  methods: {
    getImgSrc(icon) {
      var images = require.context("@/assets/images/svg/", false, /\.svg$/);
      return images("./" + icon + ".svg");
    },
    executeMethod() {
      this.$emit("executeMethod", this.icon);
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
