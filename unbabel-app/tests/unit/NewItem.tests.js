import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { setupStore } from '../mocks/setupStore'
import NewItem from '@/components/list/NewItem'
import TextInput from '@/components/inputs/TextInput'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('NewItem.vue', () => {

  let wrapper, store

  beforeEach(() => {
    store = setupStore()

    wrapper = mount(NewItem, {
      store,
      localVue
    })

    wrapper.setData({
      title: '',
      body: ''
    })
  })

  test('should emit close event', () => {
    const input = wrapper.find('.close')
    input.trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })

  test('should have title and body inputs', () => {
    expect(wrapper.findAll(TextInput).length).toBe(2)
  })

  it('should add data to store', () => {
    wrapper.setData({
      title: 'foo',
      body: 'bar'
    })

    wrapper.vm.saveItem()

    expect(store.getters['transcriptions/transcripts'].length).toBe(1)
  })
})
