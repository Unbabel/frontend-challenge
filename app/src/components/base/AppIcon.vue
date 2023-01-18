<script setup>
import { useIconDictionary } from "@/utils/useIconDictionary";
import { computed } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
  button: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const { getIconUrlFromName } = useIconDictionary();

const iconUrl = computed(() => getIconUrlFromName(props.iconName));
const altText = computed(() => props.alt ?? `${props.iconName} icon`);
const iconClasses = computed(() => {
  return {
    ["--button"]: !!props.button,
  };
});
</script>

<template>
  <img
    class="icon"
    :class="iconClasses"
    :src="iconUrl"
    :alt="altText"
    @click="emit('click')"
  />
</template>

<style scoped lang="scss">
.icon {
  cursor: pointer;

  &:not(.--button) {
    pointer-events: none;
  }
}
</style>
