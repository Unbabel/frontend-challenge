import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import TranscriptionsModel from '@/models/TranscriptionsModel'

export const useTranscriptionsStore = defineStore('transcriptions', () => {
  const model = new TranscriptionsModel()
  const transcriptions = ref(model.transcriptions)
  const getTranscriptions = computed(() => {
    return transcriptions.value
  })

  function syncWithModel() {
    transcriptions.value = model.transcriptions
  }

  async function fetchTranscriptions() {
    await model.init()
    syncWithModel()
  }

  async function uploadTranscriptions() {
    await model.upload()
  }

  function addRow() {
    model.createTranscription()
    syncWithModel()
  }

  return {
    transcriptions,
    getTranscriptions,
    fetchTranscriptions,
    uploadTranscriptions,
    addRow,
  }
})

// HMR store for vite
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTranscriptionsStore, import.meta.hot))
}
