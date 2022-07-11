<template>
  <button class="button" :disabled="loading">
    <Icon v-if="icon" :icon="icon" />
    <slot name="label"></slot>
  </button>
</template>

<script setup>
import Icon from "./Icon.vue";
import { toRefs } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const { icon, loading } = toRefs(props);
</script>

<style scoped lang="scss">
.button {
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: brightness(0.85);
  }
  &[disabled] {
    opacity: 0.8;
    transition: 0.5s;
  }
}
</style>
