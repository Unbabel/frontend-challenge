import { mount } from "@vue/test-utils";
import Header from '@/components/Header.vue';
import * as mocks from '../../src/utils/mocks';

const $store = {
  state: {
    transcriptions: mocks.mockData
  },
  commit: jest.fn(),
  dispatch: jest.fn()
}

describe('Header.vue', () => {
  it('should render 2 buttons', () => {
    const wrapper = mount(Header, {
      global: {
        mocks: {
          $store
        }
      }
    })

    const buttons = wrapper.findAll('.header__options--button');
    expect(buttons).toHaveLength(2);
  })

  it('should call getTranscriptions when get transcriptions button is called', async () => {
    const wrapper = mount(Header, {
      global: {
        mocks: {
          $store
        }
      }
    })

    const spyGetTranscriptions = jest.spyOn(wrapper.vm, 'getTranscriptions');

    const button = wrapper.get('[data-test="get-transcriptions"]');
    await button.trigger("click");

    expect(spyGetTranscriptions).toHaveBeenCalled();
  })

  it('should call postTranscriptions when post transcriptions button is called', async () => {
    const wrapper = mount(Header, {
      global: {
        mocks: {
          $store
        }
      }
    })

    const spyPostTranscriptions = jest.spyOn(wrapper.vm, 'postTranscriptions');

    const button = wrapper.get('[data-test="post-transcriptions"]');
    await button.trigger("click");

    expect(spyPostTranscriptions).toHaveBeenCalled();
  })
})

