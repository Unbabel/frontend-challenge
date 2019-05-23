import { config, shallowMount } from '@vue/test-utils'
import Checkbox from '@/components/inputs/Checkbox'

//  An attempt to silence warnings on prop change.
//  Still an issue https://github.com/vuejs/vue-test-utils/issues/631
config.silent = true

describe('Checkbox.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        initialValue: false,
        idFor: 0
      }
    })
  })

  test('triggers method on change', () => {
    const spy = spyOn(wrapper.vm, 'emitChange')

    const input = wrapper.find('input[type="checkbox"]')

    input.setChecked(true)
    input.trigger('change')

    expect(spy).toHaveBeenCalled()
  })

  test('should trigger watcher', () => {
    const spy = spyOn(wrapper.vm, 'initialValue')

    wrapper.setProps({
      initialValue: true
    })

    setTimeout(() => {
      expect(spy).toHaveBeenCalled()
    })

  })
})
