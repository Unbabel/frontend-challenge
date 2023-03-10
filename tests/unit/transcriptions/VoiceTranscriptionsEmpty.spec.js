import { mount } from '@vue/test-utils'
import VoiceTranscriptionsEmpty from '@/components/transcriptions/VoiceTranscriptionsEmpty'

describe('VoiceTranscriptionsEmpty.vue', () => {
  it('should render VoiceTranscriptionsEmpty.vue', () => {
    const wrapper = mount(VoiceTranscriptionsEmpty)
    expect(wrapper.find('.voice-transcriptions-empty').exists()).toBe(true)
    expect(wrapper.find('.voice-transcriptions-empty__create').text()).toBe('Create a new transcription')
    expect(wrapper.find('.voice-transcriptions-empty__fetch').text()).toBe('Fetch existing ones')
  })

  it('should call actions', async () => {
    const $store = {
        dispatch: jest.fn(),
      }

    const wrapper = mount(VoiceTranscriptionsEmpty, { global: { mocks: { $store }}})

    wrapper.find('.voice-transcriptions-empty__fetch').trigger('click')

    expect($store.dispatch).toHaveBeenCalledTimes(1)

    wrapper.find('.voice-transcriptions-empty__create').trigger('click')

    expect($store.dispatch).toHaveBeenCalledTimes(2)
  })
})
