<script setup lang="ts">
import { ref, toRef } from 'vue'
import TemplateHeader from '@/components/layout/TemplateHeader.vue'
import TranscriptionList from '@/components/transcription/TranscriptionList.vue'
import AddTranscription from '@/components/transcription/AddTranscription.vue'
import { useTranscriptionsStore } from '@/composables/transcriptions'

const transcriptionsStore = useTranscriptionsStore()
const addRow = () => {
  transcriptionsStore.addRow()
}
</script>

<template>
  <TemplateHeader />
  <main>
    <div class="container home">
      <div class="wrapper">
        <TranscriptionList :transcriptions="transcriptionsStore.getTranscriptions" />
      </div>
      <div class="home__button">
        <AddTranscription @add-row="addRow" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-top: 1.5rem;
}

.home__button {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
}
</style>
