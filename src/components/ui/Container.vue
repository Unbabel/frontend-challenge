<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Container"
};
</script>
<style scoped lang="scss">
div {
  max-width: 738px;
  margin: 0 auto;
}
</style>
