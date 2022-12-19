<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TemplateHeader from '@/components/layout/TemplateHeader.vue'
import TranscriptionList from '@/components/transcription/TranscriptionList.vue'
import AddTranscription from '@/components/transcription/AddTranscription.vue'
import { useTranscriptionsStore } from '@/composables/useTranscriptionsStore'

const store = useTranscriptionsStore()
const { addRow } = store
const { transcriptions } = storeToRefs(store)
</script>

<template>
  <TemplateHeader />
  <main>
    <div class="container transcriptions">
      <div class="wrapper">
        <TranscriptionList :transcriptions="transcriptions" />
      </div>
      <div class="transcriptions__button">
        <AddTranscription @add-row="addRow" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-top: 1.5rem;
}

.transcriptions__button {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
}
</style>
