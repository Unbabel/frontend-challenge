/* eslint-disable */
import API from '@/api/api'

export default {
  GET_TRANSCRIPTS ({ }) {
    return API.GET.transcripts()
  },
  PUSH_TRANSCRIPTS ({ }) {
    return API.POST.transcripts()
  }
}
