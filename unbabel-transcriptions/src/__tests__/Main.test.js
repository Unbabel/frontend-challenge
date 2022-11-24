import { mount } from '@vue/test-utils';
import Main from '../components/Main.vue';

describe('Main Component', () => {
  it('should render Main without crash', () => {
    const wrapper = mount(Main);

    expect(wrapper.text()).toContain('Transcriptions');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render Loading', () => {
    const wrapper = mount(Main, {
      data() {
        return {
          loading: true,
        };
      },
    });

    expect(wrapper.text()).toContain('Loading...');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
