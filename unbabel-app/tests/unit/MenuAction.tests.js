import { shallowMount } from '@vue/test-utils'
import MenuAction from '@/components/navigation/MenuAction'

describe('MenuAction.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(MenuAction, {
      propsData: {
        icon: 'add',
        iconAlt: 'Icon'
      }
    })
  })

  test('emits event when clicked', () => {
    const button = wrapper.find('.btn')

    button.trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
