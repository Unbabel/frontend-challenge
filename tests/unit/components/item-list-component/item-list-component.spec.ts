import Vue from 'vue';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import ItemsList from '@/components/items-list-component/items-list-component.vue';
import Vuex from 'vuex';
import { ITranscription } from '@/store/types';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuex);

describe('Item list component tests', () => {
  let wrapper: any;
  let store: any;
  let actions: any;
  let state: any;
  let transcriptionList: ITranscription[];

  beforeEach(() => {
    transcriptionList = [
      {
        id: 1,
        voice: 'Test Voice',
        text: 'Test description'
      },
      {
        id: 2,
        voice: 'Test Voice 2',
        text: 'Test description 2'
      }
    ];

    actions = {
      deleteTranscription: jest.fn(() => true)
    };

    state = {
      transcriptionList: [],
      errors: []
    };

    store = new Vuex.Store({
      state: {},
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
    const Constructor = Vue.extend(ItemsList);
    const vm = new Constructor().$mount();
    expect(vm.$el).toMatchSnapshot();
  });

  test('It should render a list of items passed as props', () => {
    wrapper = mount(ItemsList, {
      store,
      localVue,
      propsData: { transcriptionList }
    });

    expect(wrapper.findAll('li').length).toBe(2);
  });

  test('It should not render a list of items when an empty array is passed in props', () => {
    const emptyList: any[] = [];

    wrapper = mount(ItemsList, {
      store,
      localVue,
      propsData: { emptyList }
    });

    expect(wrapper.findAll('li').length).toBe(0);
  });

  test('Should pass delete action to state', () => {
    wrapper = mount(ItemsList, {
      store,
      localVue,
      propsData: { transcriptionList }
    });

    wrapper.find('.delete-button').trigger('click');

    expect(actions.deleteTranscription).toHaveBeenCalled();
  });
});
