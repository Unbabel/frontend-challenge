import NavigationComponent from '@/components/Navigation-component/Navigation-component.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
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
      getTranscriptions: jest.fn(() => true),
      uploadTranscriptions: jest.fn(() => true)
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
    const Constructor = Vue.extend(NavigationComponent);
    const vm = new Constructor().$mount();
    expect(vm.$el).toMatchSnapshot();
  });

  test('Should pass action to the store on button click', () => {
    wrapper = shallowMount(NavigationComponent, {
      store,
      localVue
    });

    wrapper.find('.upload-transcriptions').trigger('click');

    expect(actions.uploadTranscriptions).toHaveBeenCalled();

    wrapper.find('.get-transcriptions').trigger('click');

    expect(actions.getTranscriptions).toHaveBeenCalled();
  });
});
