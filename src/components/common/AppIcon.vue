<template>
  <div @click="executeAction">
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

  emits: ["executeAction"],
  methods: {
    getImgSrc(icon) {
      var images = require.context("@/assets/images/svg/", false, /\.svg$/);
      return images("./" + icon + ".svg");
    },
    executeAction() {
      console.log('emitting...')
      this.$emit("executeAction", this.icon);
    },
  },
};
</script>
<style lang="scss" scoped></style>
