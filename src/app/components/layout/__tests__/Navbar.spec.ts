import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import { generateGlobals } from '@/app/helpers/testHelpers';
/**
     * Navbar unit test that will:
     *  - Mount the component and check if all required information is set
     */
describe('Navbar', () => {
  const wrapper = mount(NavBar, { global: generateGlobals() });

  it('displays correct information', () => {
    const title = wrapper.find('h1');
    const upload = wrapper.find('.upload');
    const fetch = wrapper.find('.fetch');
    expect(title.element.textContent).toBe('Transcriptions');
    expect(upload).toBeTruthy();
    expect(fetch).toBeTruthy();
  });
});
