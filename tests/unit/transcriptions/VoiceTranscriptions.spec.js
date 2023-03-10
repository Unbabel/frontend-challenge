import { mount, shallowMount } from '@vue/test-utils'
import VoiceTranscriptions from '@/components/transcriptions/VoiceTranscriptions'

describe('VoiceTranscriptions.vue', () => {
  it('should render VoiceTranscriptions.vue', () => {
    const wrapper = mount(VoiceTranscriptions, { propsData: { transcriptions: [] } })
    expect(wrapper.find('.voice-transcriptions').exists()).toBe(true)
    
  })

  it('should render VoiceTranscriptions.vue with existing transcriptions', () => {
    const wrapper = shallowMount(VoiceTranscriptions, { propsData: { transcriptions: [{ id: 0, voice: 'Voice 1', text: 'Lorem ipsum'}] } })
    expect(wrapper.find('.voice-transcriptions__row').exists()).toBe(true)
    expect(wrapper.find('.voice-transcriptions__row-delete').exists()).toBe(true)
    expect(wrapper.find('.voice-transcriptions__row-editable').exists()).toBe(true)
  })
})
