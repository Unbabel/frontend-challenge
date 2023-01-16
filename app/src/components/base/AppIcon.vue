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
});

const { getIconUrlFromName } = useIconDictionary();

const iconUrl = computed(() => getIconUrlFromName(props.iconName));
const altText = computed(() => props.alt ?? `${props.iconName} icon`);
</script>

<template>
  <img class="icon" :src="iconUrl" :alt="altText" />
</template>
