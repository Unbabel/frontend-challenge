import Vue from 'vue';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import AddRow from '@/components/add-row-component/add-row-component.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuex);

describe('Add Row Component Tests', () => {
  let wrapper: any;
  let store: any;
  let actions: any;
  let state: any;

  beforeEach(() => {
    actions = {
      addTranscription: jest.fn(() => true)
    };

    state = {
      transcriptionList: [],
      errors: []
    };

    store = new Vuex.Store({
      actions,
      modules: {
        transcription: {
          namespaced: true,
          state,
          actions
        }
      }
    });
  });

  test('Snapshot test', () => {
    const Constructor = Vue.extend(AddRow);
    const vm = new Constructor().$mount();
    expect(vm.$el).toMatchSnapshot();
  });

  test('Has a button', () => {
    wrapper = mount(AddRow);

    expect(wrapper.contains('.add-row-button')).toBe(true);
  });

  test('Passes action to store', () => {
    const instance = shallowMount(AddRow, { store, localVue });

    instance.find('.add-row-button').trigger('click');

    expect(actions.addTranscription).toHaveBeenCalled();
  });
});
