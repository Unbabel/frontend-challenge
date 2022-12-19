import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import type { UpdateField } from '@/models/TranscriptionsModel'
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

  function updateTranscriptionById(id: number, field: UpdateField, value: string) {
    model.updateTranscriptionById(id, field, value)
    syncWithModel()
  }

  return {
    transcriptions,
    fetchTranscriptions,
    uploadTranscriptions,
    addRow,
    removeTranscriptionById,
    updateTranscriptionById,
  }
})

// HMR store for vite
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTranscriptionsStore, import.meta.hot))
}
