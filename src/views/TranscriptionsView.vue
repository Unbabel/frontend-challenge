<script setup lang="ts">
import { ref } from 'vue'
import TemplateHeader from '@/components/layout/TemplateHeader.vue'
import TranscriptionList from '@/components/transcription/TranscriptionList.vue'
import AddTranscription from '@/components/transcription/AddTranscription.vue'

const transcriptions = ref([
  { id: '1', title: 'Title example #1', description: 'Description example' },
  {
    id: '2',
    title: 'Title example #2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ante, posuere aliquet aliquam ut, sodales at sapien. Maecenas justo sem, commodo non odio in, pellentesque pharetra mi.',
  },
  {
    id: '3',
    title: 'Title example #3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
])

const addRow = () => {
  transcriptions.value.push({
    ...transcriptions.value[2],
    id: `${transcriptions.value.length + 1}`,
  })
}
</script>

<template>
  <TemplateHeader />
  <main>
    <div class="container home">
      <div class="wrapper">
        <TranscriptionList :transcriptions="transcriptions" />
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
