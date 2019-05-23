import { mount } from '@vue/test-utils'
import ListItem from '@/components/list/ListItem'

const stubMethods = {
  toggleSelection: jest.fn(),
  removeItem: jest.fn(),
}

const props = {
  id: 1,
  voice: 'voice1',
  text: 'text1',
  selected: false
}

describe('ListItem.vue', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(ListItem, {
      propsData: props
    })

    wrapper.setMethods(stubMethods)
  })

  test('should have id prop', () => {
    expect(wrapper.vm.id).toBe(1)
  })

  test('should have voice prop', () => {
    expect(wrapper.vm.voice).toBe('voice1')
  })

  test('should have text prop', () => {
    expect(wrapper.vm.text).toBe('text1')
  })

  test('should select item', () => {
    const checkbox = wrapper.find('input[type="checkbox')
    checkbox.setChecked()
    expect(wrapper.vm.toggleSelection).toHaveBeenCalled()
  })

  test('should remove item', () => {
    const checkbox = wrapper.find('.remove')
    checkbox.trigger('click')
    expect(wrapper.vm.removeItem).toHaveBeenCalled()
  })

  test('should toggle hover state', () => {
    wrapper.trigger('mouseover')
    expect(wrapper.vm.isHovering).toBeTruthy()
  })
})
