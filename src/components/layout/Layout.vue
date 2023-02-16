<script setup>
import TopBar from '../top-bar/TopBar.vue';
import Content from '../content/Content.vue';

</script>

<template>
  <div class="layout-container">
    <TopBar />
    <Content>
      <slot />
    </Content>
  </div>

</template>

<style scoped>

</style>
