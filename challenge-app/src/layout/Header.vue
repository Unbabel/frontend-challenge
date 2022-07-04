<template>
  <header class="header">
    <div class="header-wrapper">
      <slot name="content"></slot>
    </div>
  </header>

</template>

<script setup>

</script>

<style scoped lang="scss">
.header {
  background: $white;
  box-shadow: $box_shadow;

  &-wrapper {
    @extend .wrapper;
  }
}


</style>
