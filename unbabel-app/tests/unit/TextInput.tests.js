import { shallowMount } from '@vue/test-utils'
import TextInput from '@/components/inputs/TextInput'

describe('TextInput.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TextInput, {
      propsData: {
        initialValue: '',
        name: 'test-input'
      }
    })

    wrapper.setData({
      value: '',
      localValue: '',
      isEditing: false,
      isSaving: false,
      maxWidth: 0
    })
  })

  test('triggers handleBlur on input blur/unfocus', () => {
    const spy = spyOn(wrapper.vm, 'handleBlur')

    const input = wrapper.find('span')

    wrapper.setData({ isEditing: true })

    input.trigger('blur')

    expect(spy).toHaveBeenCalled()
  })

  test('disaptchChange within handleBlur method', () => {
    const spy = spyOn(wrapper.vm, 'dispatchChange')

    wrapper.vm.handleBlur()

    expect(spy).toHaveBeenCalled()
  })

  test('emits event when value changed', () => {
    const newValue = 'foo'
    const stub = jest.fn()

    wrapper.setData({ localValue: newValue })

    wrapper.vm.$on('changedValue', stub)

    wrapper.vm.dispatchChange()

    setTimeout(() => {
      expect(stub).toBeCalledWith(newValue)
      expect(wrapper.vm.resetStates).toHaveBeenCalled()
    })
  })
})
