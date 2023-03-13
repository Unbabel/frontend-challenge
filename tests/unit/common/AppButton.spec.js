import { mount } from '@vue/test-utils'
import AppButton from '@/components/common/AppButton'

describe('AppButton.vue', () => {
  it('should render AppButton.vue', () => {
  const wrapper = mount(AppButton)
  expect(wrapper.find('.app-button').exists()).toBe(true)
  })
})
