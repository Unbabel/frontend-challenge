import { mount } from '@vue/test-utils'
import AppInput from '@/components/common/AppInput'

describe('AppInput.vue', () => {
  let wrapper

  beforeAll(() => {
          wrapper = mount(AppInput, { propsData: {
          voice: ''
      }})
  })

  it('should render AppInput.vue', () => {
    expect(wrapper.find('.app-input').exists()).toBe(true)
    expect(wrapper.find('.app-input__title').exists()).toBe(true)
  })

  it('should emit a input event', () => {
    const appInput = wrapper.find('.app-input__title')

    appInput.trigger('input')
    expect(wrapper.emitted()).toHaveProperty('change-title')

  })
})
