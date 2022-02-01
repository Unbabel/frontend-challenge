import { shallowMount } from '@vue/test-utils'
import TableRowEdit from '@/components/TableRowEdit.vue'
import { i18n } from '../utils.js'

describe('TableRowEdit.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TableRowEdit, {
      propsData: {
        titleProp: 'title',
        contentProp: 'content',
        value: { title: 'title', content: 'content' }
      },
      i18n
    });
  });

  test('Props', () =>{  
    expect(wrapper.props().titleProp).toBe('title')
    expect(wrapper.props().contentProp).toBe('content')
    expect(wrapper.props().value).toStrictEqual({ title: 'title', content: 'content' })
  })

  test('change title input value', async () => {  
    const testInput = 'test input value' 

    const textInput = wrapper.find('input')
    await textInput.setValue(testInput)
    expect(wrapper.find('input').element.value).toBe(testInput)
    
    await wrapper.vm.$nextTick()
    
    // check emitted input value
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input.length).toBe(1)
    expect(wrapper.emitted().input[0]).toStrictEqual([{ title: testInput, content: 'content' }])
  })

  test('change content input value', async () => {  
    const testInput = 'test textarea value' 

    const textarea = wrapper.find('textarea')
    await textarea.setValue(testInput)
    expect(wrapper.find('textarea').element.value).toBe(testInput)
    
    await wrapper.vm.$nextTick()

    // check emitted input value
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input.length).toBe(1)
    expect(wrapper.emitted().input[0]).toStrictEqual([{ title: 'title', content: testInput }])
  })

})
