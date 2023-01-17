<script setup>
import { getCurrentInstance, computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
});

const vm = getCurrentInstance()?.proxy;
const pageTitle = computed(() => {
  if (props.title) return props.title;
  return vm.$route.meta?.title;
});
</script>

<template>
  <header>
    <div class="app-header">
      <h1 class="page-title">{{ pageTitle }}</h1>
      <slot name="actions"></slot>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
