import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import TranscriptionsModel from '@/models/TranscriptionsModel'

export const useTranscriptionsStore = defineStore('transcriptions', () => {
  const model = new TranscriptionsModel()
  const transcriptions = ref([...model.transcriptions])

  function syncWithModel() {
    transcriptions.value = [...model.transcriptions]
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

  function removeTranscriptionById(id: number) {
    model.removeTranscriptionById(id)
    syncWithModel()
  }

  return {
    transcriptions,
    fetchTranscriptions,
    uploadTranscriptions,
    addRow,
    removeTranscriptionById,
  }
})

// HMR store for vite
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTranscriptionsStore, import.meta.hot))
}
