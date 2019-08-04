import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import InplaceEditor from '@/components/inplace-editor-component/inplace-editor-component.vue';
import Vuex from 'vuex';
import { ITranscription } from '@/store/types';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuex);

describe('Add Row Component Tests', () => {
  let wrapper: any;
  let store: any;
  let actions: any;
  let state: any;
  let transcriptionInfo: ITranscription;

  beforeEach(() => {
    transcriptionInfo = {
      id: 1,
      voice: 'Test Voice',
      text: 'Test description'
    };

    actions = {
      editTranscription: jest.fn(() => true)
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
    const Constructor = Vue.extend(InplaceEditor);
    const vm = new Constructor().$mount();
    expect(vm.$el).toMatchSnapshot();
  });

  test('It should show text values when initialized with a transcription', () => {
    wrapper = shallowMount(InplaceEditor, {
      propsData: { transcriptionInfo }
    });

    expect(wrapper.find('.inplace-editor--voice').text()).toBe(
      transcriptionInfo.voice
    );
    expect(wrapper.find('.inplace-editor--text').text()).toBe(
      transcriptionInfo.text
    );
  });

  test('Should display input and textarea with transcription values alternately when the texts are clicked', () => {
    wrapper = shallowMount(InplaceEditor, {
      propsData: { transcriptionInfo }
    });

    wrapper.find('.inplace-editor--voice').trigger('click');

    expect(wrapper.find('input').element.value).toBe(transcriptionInfo.voice);

    wrapper.find('.inplace-editor--text').trigger('click');

    expect(wrapper.find('textarea').element.value).toBe(transcriptionInfo.text);
  });

  test('Should pass action to store on save button click', () => {
    wrapper = shallowMount(InplaceEditor, {
      propsData: { transcriptionInfo },
      store,
      localVue
    });

    wrapper.find('.inplace-editor--voice').trigger('click');

    wrapper.find('.inplace-editor--button').trigger('click');

    expect(actions.editTranscription).toHaveBeenCalled();

    wrapper.find('.inplace-editor--text').trigger('click');

    wrapper.find('.inplace-editor--button').trigger('click');

    expect(actions.editTranscription).toHaveBeenCalled();
  });
});
