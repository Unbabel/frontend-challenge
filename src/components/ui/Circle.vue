<template>
  <div :style="style" />
</template>
<script>
export default {
  name: "Circle",
  props: {
    delay: {
      type: Number,
      default: 0
    },
    rotate: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style() {
      if (this.rotate !== 0 && this.delay !== 0) {
        return `transform: rotate(${this.rotate}); delay: ${this.delay}`;
      }
      return "";
    }
  }
};
</script>
<style scoped lang="scss">
@keyframes go {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

div {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #999;
    border-radius: 100%;
    animation: go 1.2s infinite ease-in-out both;
  }
}
</style>
