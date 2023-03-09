import { mount } from '@vue/test-utils'
import AppButton from '@/components/common/AppButton'

test('renders a todo', () => {
  const wrapper = mount(AppButton)

  const button = wrapper.find('.app-button')

  expect(button.isVisible).toBe(true)
})