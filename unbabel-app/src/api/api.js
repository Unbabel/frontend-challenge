import axios from '@/configs/axios'

const endpoints = {
  allTranscripts: '/5ae1c5792d00004d009d7e5c'
}

export default {
  'GET': {
    transcripts: async () => {
      return axios.get(endpoints.allTranscripts)
    }
  },
  'POST': {
    transcripts: async (data) => {
      return axios.post(endpoints.allTranscripts, data)
    }
  }
}
