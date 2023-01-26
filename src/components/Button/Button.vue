<template>
  <button class="c-button qa-button" @click="$emit('click')">
    <span v-if="text.length > 0">{{ text }}</span>
    <Icon v-if="icon.length > 0" :name="icon" />
  </button>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.c-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
}
</style>
