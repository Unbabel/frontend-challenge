<template>
  <div class="base-layout">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<style scoped>
.base-layout {
  width: 100%;
  height: 100%;
}
</style>
