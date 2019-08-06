<template>
  <span :class="name">
    <svg :width="`${width}px`" :height="`${height}px`">
      <use :xlink:href="`#${name}`" />
    </svg>
  </span>
</template>

<script>
export default {
  name: "Icon",

  props: {
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    },
    name: {
      type: String,
      require: true,
      default: "person"
    },
    color: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
span {
  color: $color-grey;
  &:hover {
    color: $color-purple;
  }

  &.person {
    color: $color-blue;
  }

  &.action {
    color: $color-blue;
  }
}
</style>
