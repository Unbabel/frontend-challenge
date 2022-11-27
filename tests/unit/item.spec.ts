import { mount } from "@vue/test-utils";
import Item from '@/components/Item.vue';

const mockData = [
  {
      "id": 1,
      "voice": "test 1",
      "text": "This is a one line sentence made to show how it fits"
  },
  {
      "id": 2,
      "voice": "test 2",
      "text": "Lorem ipsum dolor sit amet"
  },
  {
      "id": 3,
      "voice": "test 3",
      "text": "Lorem ipsum dolor sit amet"
  }
]

const $store = {
  state: {
    transcriptions: mockData
  },
  commit: jest.fn()
}

describe('Item.vue', () => {
  it('should render the correct number of Items', () => {
    const wrapper = mount(Item, {
      global: {
        mocks: {
          $store
        }
      }
    })
    const items = wrapper.findAll(".list__item");

    expect(items).toHaveLength(3);
  })
})

