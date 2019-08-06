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

  &.person {
    color: $color-blue;
  }

  &.upload,
  &.fetch-document {
    color: $color-grey-dark;
  }

  &.add-row {
    color: $color-grey-light;
  }

  &:hover {
    color: $color-purple;
  }
}
</style>
