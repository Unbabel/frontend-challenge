<script setup lang="ts">
import type { PropType } from 'vue'
import TranscriptionItem from './TranscriptionItem.vue'
import type { Transcription } from '@/types/transcription'

defineProps({
  transcriptions: {
    type: Array as PropType<Transcription[]>,
    default: () => [],
  },
})
</script>

<template>
  <div class="transcription-list" data-cy="transcriptions-list">
    <ul v-if="transcriptions.length">
      <li v-for="transcription in transcriptions" :key="transcription.id">
        <TranscriptionItem :transcription="transcription" />
      </li>
    </ul>
    <p v-else class="content">
      No transcriptions found, try to download or add
    </p>
  </div>
</template>

<style lang="scss" scoped>
.transcription-list {
  border: 1px solid var(--color-border);

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
    max-height: 600px;
    overflow-y: auto;
  }

  li:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
}
</style>
