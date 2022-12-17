import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTranscriptionsStore } from '@/composables/transcriptions'
import TemplateHeader from '@/components/layout/TemplateHeader.vue'

describe('TemplateHeader.vue', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let store = null

  beforeEach(() => {
    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())

    // create an instance of the data store
    store = useTranscriptionsStore()
  })

  it('should render', () => {
    const wrapper = mount(TemplateHeader)
    expect(wrapper.text()).toContain('Transcriptions')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have title and buttons', async () => {
    const wrapper = mount(TemplateHeader)

    expect(wrapper.find('.template-header__title').exists()).toBe(true)
    expect(wrapper.find('.template-header__buttons').exists()).toBe(true)
    expect(wrapper.findAll('.template-header__buttons .button').length).toBe(2)
  })
})
