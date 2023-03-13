import { mount } from '@vue/test-utils'
import AppTextarea from '@/components/common/AppTextarea'

describe('AppTextarea.vue', () => {
  let wrapper

  beforeAll(() => {
          wrapper = mount(AppTextarea, { propsData: {
          text: ''
      }})
  })

  it('should render AppTextarea.vue', () => {
    expect(wrapper.find('.app-textarea').exists()).toBe(true)
    expect(wrapper.find('.app-textarea__text').exists()).toBe(true)
  })

  it('should emit a input event', () => {
    const appTextarea = wrapper.find('.app-textarea__text')

    appTextarea.trigger('input')
    expect(wrapper.emitted()).toHaveProperty('change-description')

  })
})
