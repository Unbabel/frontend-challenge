import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("DefaultLayout.vue", () => {
  //Check if component renders
  //Check if finds components
  //topmenu
  //button
  let wrapper;
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      POST_LIST: jest.fn(),
      GET_LIST: jest.fn(),
    };
    getters = {
      LIST: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        list: {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });

  it("Component renders", () => {
    wrapper = shallowMount(DefaultLayout, {
      store,
      localVue,
    });
    expect(wrapper.exists()).toBe(true);
  });
  it("Has layout class", () => {
    wrapper = mount(DefaultLayout, {
      store,
      localVue,
    });
    expect(wrapper.find(".qa-default-layout").classes("o-default-layout")).toBe(
      true
    );
  });
  it("Has reqired components", async () => {
    wrapper = mount(DefaultLayout, {
      store,
      localVue,
    });
    expect(wrapper.findComponent({ name: "TopMenu" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "Button" }).exists()).toBe(true);
  });
  it("Emits post event", async () => {
    wrapper = mount(DefaultLayout, {
      store,
      localVue,
    });
    await wrapper.find("[title='Upload'].qa-button").trigger("click");
    expect(actions.POST_LIST).toHaveBeenCalled();
  });
  it("Emits post event", async () => {
    wrapper = mount(DefaultLayout, {
      store,
      localVue,
    });
    await wrapper.find("[title='Download'].qa-button").trigger("click");
    expect(actions.GET_LIST).toHaveBeenCalled();
  });
});
