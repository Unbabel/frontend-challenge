import { mount } from "@vue/test-utils";
import ListItems from '@/components/ListItems.vue';

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

describe('ListItems.vue', () => {
  it('should render the correct number of Items', () => {
    const wrapper = mount(ListItems, {
      global: {
        mocks: {
          $store
        }
      }
    })
    const items = wrapper.findAll(".list__item");

    expect(items).toHaveLength(3);
  })

  it("should call addTranscriptions function", async () => {
    const wrapper = mount(ListItems, {
      global: {
        mocks: {
          $store
        }
      }
    })
  
    const spyAddTranscriptions = jest.spyOn(wrapper.vm, 'addTranscriptions');
    const button = wrapper.find(".list__action--button");
    await button.trigger("click");
    expect(spyAddTranscriptions).toHaveBeenCalled();
  });
  
  it.skip("should add a new list item", async () => {
    jest.useFakeTimers();
    const wrapper = mount(ListItems, {
      global: {
        mocks: {
          $store
        }
      }
    })
  
    const button = wrapper.find(".list__action--button");
    await button.trigger("click");
    
    await wrapper.vm.$nextTick();
  
    const items = wrapper.findAll(".list__item");
    expect(items).toHaveLength(4);
  });
  
})