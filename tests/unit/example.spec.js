import SearchComponent from "@/components/SearchComponent.vue";
import CustomButton from "@/components/CustomButton.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TranscriptionRow from "@/components/TranscriptionRow.vue";
import { mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex'

describe("SearchComponent.vue", () => {
  const wrapper = mount(SearchComponent);
  it("SearchComponent Input exists", () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });
  it("SearchComponent Input initial empty", () => {
    expect(wrapper.find('input').element.value).toBe('');
  });
  it('SearchComponent Input renders correctly with different data', async () => {
    await wrapper.setData({ searchText: "lorem" });
    expect(wrapper.find('input').element.value).toBe('lorem');
  });
});



describe("CustomButton.vue", () => {
  it("CustomButton has a button element", () => {
    const wrapper = mount(CustomButton, {
      props: {
        onButtonClick: () => console.log("onButtonClick"),
        iconUrl: "require('@/assets-for-challenge/delete@1x.png')",
      }
    });
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it("CustomButton buttonSize prop adds the correct class to button", () => {
    const wrapper = mount(CustomButton, {
      props: {
        buttonSize: 'lg',
        onButtonClick: () => console.log("onButtonClick"),
        iconUrl: "require('@/assets-for-challenge/delete@1x.png')",
      },
    });
    expect(wrapper.classes()).toContain('btn-lg');
  });
  it('CustomButton has img if the isIcon prop is true', () => {
    const wrapper = mount(CustomButton, {
      props: {
        isIcon: true,
        iconUrl: "require('@/assets-for-challenge/delete@1x.png')",
        onButtonClick: () => console.log("onButtonClick")
      },
    });
    expect(wrapper.find('img').exists()).toBe(true);
  });
  it('CustomButton doesnt render img if the isIcon prop is true and button Loading is true', async () => {
    const wrapper = mount(CustomButton, {
      props: {
        isIcon: true,
        iconUrl: "require('@/assets-for-challenge/delete@1x.png')",
        buttonLoading: true,
        onButtonClick: () => console.log("onButtonClick")
      },
    });
    expect(wrapper.find('img').exists()).toBe(false);
  });
});


describe("HeaderComponent.vue", () => {
  const getters = {
    getCurrentLoadingButton: (state) => state.currentLoadingButton
  }
  const store = new Vuex.Store({
    getters,
    state: {
      currentLoadingButton: `test`
    }
  });
  const wrapper = shallowMount(HeaderComponent, {
    global: {
      plugins: [store]
    }
  });
  it("HeaderComponent App title exists", () => {
    expect(wrapper.find('#app-title').exists()).toBe(true);
  });
  it("HeaderComponent post button exists", () => {
    expect(wrapper.find('#post-transcriptions').exists()).toBe(true);
  });
  it('HeaderComponent fetch button exists', () => {
    expect(wrapper.find('#fetch-transcriptions').exists()).toBe(true);
  });
});


describe("TranscriptionRow.vue", () => {
  const getters = {
    getCurrentLoadingButton: (state) => state.currentLoadingButton
  }
  const store = new Vuex.Store({
    getters,
    state: {
      currentLoadingButton: `test`
    }
  });
  let item = {
    id: 1,
    voice: "voice",
    text: "some text"
  }
  const wrapper = shallowMount(TranscriptionRow, {
    global: {
      plugins: [store]
    },
    attachTo: document.body,
    props: {
      keyForItem: 0,
      key: item.id,
      itemData: item
    }
  });

  it("TranscriptionRow has checkbox", () => {
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });
  it("TranscriptionRow checkbox has check trigger", async () => {
    const checkbox = wrapper.find('input[type=checkbox]');
    expect(checkbox.element.checked).toBe(false);
    await wrapper.find('input[type=checkbox]').setValue();
    expect(checkbox.element.checked).toBe(true);
  });
  it("TranscriptionRow has person image", () => {
    expect(wrapper.find('.person-image').exists()).toBe(true);
  });
  it('TranscriptionRow has item title element', () => {
    expect(wrapper.find('.item-title').exists()).toBe(true);
  });
  it('TranscriptionRow has item content element', () => {
    expect(wrapper.find('.item-content').exists()).toBe(true);
  });
  it('TranscriptionRow Edit and Delete hidden exists', () => {
    expect(wrapper.find('.edit').exists()).toBe(true);
    expect(wrapper.find('.delete').exists()).toBe(true);
  });
  // it('TranscriptionRow Edit Click displays the input for text and title', async () => {
  //   expect(wrapper.findAll('input[type=checkbox]').length).toBe(1);
  //   await wrapper.find("#edit-1").trigger("click");
  //   await wrapper.vm.$nextTick();
  //   expect(wrapper.findAll('input[type=checkbox]').length).toBe(1);
  //   expect(wrapper.findAll('input').length).toBe(2);
  // });
});


