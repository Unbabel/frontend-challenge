import { type TranscriptionsClientInterface, transcriptionsClient } from '@/services/api/transcriptionsClient'
import type { Transcription } from '@/types/transcription'

export default class TranscriptionsModel {
  transcriptions: Transcription[]
  apiClient: TranscriptionsClientInterface

  constructor() {
    this.apiClient = transcriptionsClient
    this.transcriptions = []
  }

  async init() {
    const transcriptions = await this.apiClient.load()
    if (transcriptions) {
      this.transcriptions = transcriptions
    }
  }

  upload() {
    this.apiClient.upload(this.transcriptions)
  }

  createTranscription() {
    this.transcriptions.push({
      id: `${this.transcriptions.length + 1}`,
      voice: 'New voice',
      text: 'New description text',
    })
  }

  getTranscriptions() {
    return this.transcriptions
  }
}
