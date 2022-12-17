import request from './request'

export interface ApiClientInterface {
  endpointUrl: string
  fetch<R>(params?: Record<string, unknown>): Promise<R | void>
}

export class ApiClient implements ApiClientInterface {
  endpointUrl: string

  constructor(endpointUrl: string) {
    this.endpointUrl = endpointUrl
  }

  async fetch<R>(params?: Record<string, unknown>): Promise<R | void> {
    try {
      return request(this.endpointUrl, params)
    }
    catch (error) {
      console.error('Fetch ApiClient error', error)
    }
  }
}
