import { mount } from "@vue/test-utils";
import Item from '@/components/Item.vue';
import * as mocks from '../../src/utils/mocks';

const $store = {
  state: {
    transcriptions: mocks.mockData
  },
  commit: jest.fn()
}

describe.skip('Item.vue', () => {
  it('should render item with the correct header', () => {
    const wrapper = mount(Item, {
      global: {
        mocks: {
          $store
        }
      }
    })
    const item = wrapper.findAll(".item__header");

    expect(item).toContain(mocks.mockData[0].voice);
  })

  it('should render item with the correct textarea content', () => {
    const wrapper = mount(Item, {
      global: {
        mocks: {
          $store
        }
      }
    })
    const item = wrapper.findAll(".item__textarea--content");

    expect(item).toContain(mocks.mockData[0].text);
  })
})

