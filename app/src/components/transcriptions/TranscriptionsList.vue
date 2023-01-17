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

const emit = defineEmits(["transcription-select", "transcription-delete"]);
</script>

<template>
  <ul>
    <template v-if="props.transcriptions.length">
      <TranscriptionsListItem
        v-for="transcription in props.transcriptions"
        :key="transcription.Id"
        :transcription="transcription"
        @select="emit('transcription-select', transcription)"
        @delete="emit('transcription-delete', transcription)"
      ></TranscriptionsListItem>
    </template>
    <template v-else>
      <li class="caption text-center text-italic">
        Not worrying about the blank state
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
ul {
  margin: 0;
  list-style: none;
  padding: 0;
}
</style>
