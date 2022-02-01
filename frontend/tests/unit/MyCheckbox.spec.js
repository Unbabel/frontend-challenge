import { shallowMount } from '@vue/test-utils'
import MyCheckbox from '@/components/MyCheckbox.vue'

describe('MyCheckbox.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MyCheckbox);
  });

  test('check the box', async () =>{ 
    const input = wrapper.find('input')
    await input.setChecked()
    expect(input.element.checked).toBeTruthy()
  })

  
})
