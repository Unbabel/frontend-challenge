import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { setupStore } from '../mocks/setupStore'
import List from '@/components/list/List'
import NewItem from '@/components/list/NewItem'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('List.vue', () => {

  let wrapper

  beforeEach(() => {
    const store = setupStore()

    wrapper = shallowMount(List, {
      store,
      localVue
    })
  })

  test('has transcripts getter', () => {
    expect(typeof wrapper.vm.transcripts).toBe('object')
  })
})
