<script setup>
import TranscriptionReadModel from "@/models/TranscriptionReadModel";
import TranscriptionsListItem from "./TranscriptionsListItem.vue";

const props = defineProps({
  transcriptions: {
    type: Array,
    required: true,
    validator: (prop) => prop.every((p) => p instanceof TranscriptionReadModel),
  },
});
</script>

<template>
  <ul>
    <TranscriptionsListItem
      v-for="transcription in props.transcriptions"
      :key="transcription.Id"
      :transcription="transcription"
    ></TranscriptionsListItem>
  </ul>
</template>

<style scoped lang="scss">
ul {
  margin: 0;
  list-style: none;
  padding: 0;
}
</style>
