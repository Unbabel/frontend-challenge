<template>
  <div class="base_layout" data-testid="base_layout">
    <header class="base_layout__header" data-testid="base_layout__header">
      <slot name="header"></slot>
    </header>
    <main class="base_layout__main" data-testid="base_layout__main">
      <slot name="main"></slot>
    </main>
    <footer class="base_layout__footer" data-testid="base_layout__footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.base_layout {

  .base_layout__header {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.35);
  }

  .base_layout__main {
    max-width: 1024px;
    min-width: 320px;
    width: 58.5%;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
  }

}

</style>
