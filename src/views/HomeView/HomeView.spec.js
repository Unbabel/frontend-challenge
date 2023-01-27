import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import HomeView from "@/views/HomeView/HomeView.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HomeView.vue", () => {
  //Check if component renders
  //Check if finds components
  //list
  //defaultLayout
  let wrapper;
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      ADD_ITEM: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        list: {
          namespaced: true,
          actions,
        },
      },
    });
  });

  it("Component renders", () => {
    wrapper = shallowMount(HomeView, {
      store,
      localVue,
    });
    expect(wrapper.exists()).toBe(true);
  });
  it("Has required components", async () => {
    wrapper = mount(HomeView, {
      store,
      localVue,
    });
    expect(wrapper.findComponent({ name: "DefaultLayout" }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: "List" }).exists()).toBe(true);
  });
});
