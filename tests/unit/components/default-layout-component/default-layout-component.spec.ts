import DefaultLayout from '@/components/default-layout-component/default-layout-component.vue';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

describe('Default layout component tests', () => {
  let wrapper: any;

  test('Snapshot test', () => {
    const titles = {
      title: 'Test Title',
      subtitle: 'Test Subtitle'
    };

    wrapper = shallowMount(DefaultLayout, {
      propsData: { titles },
      stubs: ['router-link']
    });

    expect(wrapper).toMatchSnapshot();
  });

  test('Should display the values on props when mounted with props', () => {
    const titles = {
      title: 'Test Title',
      subtitle: 'Test Subtitle'
    };

    wrapper = shallowMount(DefaultLayout, {
      propsData: { titles },
      stubs: ['router-link']
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
      propsData: {},
      stubs: ['router-link']
    });

    expect(wrapper.find('.main-title').text()).toBe(titles.title);
    expect(wrapper.find('.subtitle').text()).toBe(titles.subtitle);
  });
});
