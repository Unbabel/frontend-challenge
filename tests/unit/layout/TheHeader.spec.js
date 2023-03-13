import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/layout/TheHeader'

describe('TheHeader.vue', () => {
  it('should render TheHeader.vue', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.find('.the-header').exists()).toBe(true)
    expect(wrapper.find('.the-header__title').exists()).toBe(true)
    expect(wrapper.find('.the-header__actions').exists()).toBe(true)
    expect(wrapper.find('.the-header').text()).toBe('Transcriptions')
  })

  it('should call actions', async () => {
    const $store = {
        dispatch: jest.fn(),
      }

    const wrapper = shallowMount(TheHeader, { global: { mocks: { $store }}})

    await wrapper.vm.fetch()

    expect($store.dispatch).toHaveBeenCalled()
  })
})
