import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Toast from '@/components/toast-component/toast-component.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuex);

describe('Toast Component Tests', () => {
  let wrapper: any;
  let store: any;
  let actions: any;
  let state: any;

  beforeEach(() => {
    actions = {
      dismissError: jest.fn(() => true)
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
    const Constructor = Vue.extend(Toast);
    const vm = new Constructor().$mount();
    expect(vm.$el).toMatchSnapshot();
  });

  test('Should have error placeholder when loaded', () => {
    const errorMessage = 'An unexpected error occurred please refresh the page';
    const errorList = [''];

    wrapper = shallowMount(Toast, {
      store,
      localVue,
      propsData: { errorList }
    });

    expect(wrapper.findAll('.toast-error').length).toBe(1);
    expect(wrapper.find('.toast-error--description').text()).toBe(errorMessage);
  });

  test('Should display a list of errors', () => {
    const errorMessage = 'Test Error Message';
    const errorList = [errorMessage];

    wrapper = shallowMount(Toast, {
      store,
      localVue,
      propsData: { errorList }
    });

    expect(wrapper.findAll('.toast-error').length).toBe(1);
    expect(wrapper.find('.toast-error--description').text()).toBe(errorMessage);
  });

  test('Should dismiss error on close button click', () => {
    const errorMessage = 'An unexpected error occurred please refresh the page';
    const errorList = [''];

    wrapper = shallowMount(Toast, {
      store,
      localVue,
      propsData: { errorList }
    });

    expect(wrapper.findAll('.toast-error').length).toBe(1);
    expect(wrapper.find('.toast-error--description').text()).toBe(errorMessage);

    wrapper.findAll('.toast-error--dismiss').trigger('click');

    expect(actions.dismissError).toHaveBeenCalled();
  });
});
