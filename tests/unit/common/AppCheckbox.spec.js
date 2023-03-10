import { mount } from '@vue/test-utils'
import AppCheckbox from '@/components/common/AppCheckbox'

describe('AppCheckbox.vue', () => {
  let wrapper

    beforeAll(() => {
            wrapper = mount(AppCheckbox)
    })

  it('should render AppCheckbox.vue', () => {
    expect(wrapper.find('.app-checkbox').exists()).toBe(true)
    expect(wrapper.find('.app-checkbox__transcription').exists()).toBe(true)
  })

  it('should check/uncheck the checkbox', async () => {
    const appCheckbox = wrapper.find('.app-checkbox__transcription')
    expect(wrapper.vm.checked).toBe(false)
    await appCheckbox.setChecked()
    expect(wrapper.vm.checked).toBe(true)
  })
})
