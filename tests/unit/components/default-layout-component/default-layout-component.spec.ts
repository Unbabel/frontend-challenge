import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import DefaultLayout from '@/components/default-layout-component/default-layout-component.vue';
import Vuex from 'vuex';
import { ITranscription } from '@/store/types';

describe('Default layout component tests', () => {
  let wrapper: any;

  test('Snapshot test', () => {
    const Constructor = Vue.extend(DefaultLayout);
    const vm = new Constructor().$mount();
    expect(vm.$el).toMatchSnapshot();
  });

  test('Should display the values on props when mounted with props', () => {
    const titles = {
      title: 'Test Title',
      subtitle: 'Test Subtitle'
    };

    wrapper = shallowMount(DefaultLayout, {
      propsData: { titles }
    });

    expect(wrapper.find('.main-title').text()).toBe(titles.title);
    expect(wrapper.find('.subtitle').text()).toBe(titles.subtitle);
  });

  test('Should display default error messages when no props are passed', () => {
    const titles = {
      title: 'A Problem occurred',
      subtitle: 'Please refresh the page or try again in a bit'
    };

    wrapper = shallowMount(DefaultLayout, {
      propsData: {}
    });

    expect(wrapper.find('.main-title').text()).toBe(titles.title);
    expect(wrapper.find('.subtitle').text()).toBe(titles.subtitle);
  });
});
