import { ApiClient, type ApiClientInterface } from './ApiClient'
import type { Transcription } from '@/types/transcription'

const apiEndpointUrl = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'

export type TranscriptionClientReturn = Promise<Transcription[] | void>
export interface TranscriptionsClientInterface {
  client: ApiClientInterface
  upload(transcription: Transcription[]): TranscriptionClientReturn
  load(): TranscriptionClientReturn
}

class TranscriptionsClient {
  client: ApiClientInterface

  constructor() {
    this.client = new ApiClient(apiEndpointUrl)
  }

  upload(transcriptions: Transcription[]): TranscriptionClientReturn {
    return this.client.fetch({
      method: 'POST',
      body: JSON.stringify(transcriptions),
    })
  }

  load(): TranscriptionClientReturn {
    return this.client.fetch()
  }
}

export const transcriptionsClient = new TranscriptionsClient()
