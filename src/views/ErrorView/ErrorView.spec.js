import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ErrorView from "@/views/ErrorView/ErrorView.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ErrorView.vue", () => {
  //Check if component renders
  //Check if finds components
  //list
  //defaultLayout
  let wrapper;
  it("Component renders", () => {
    wrapper = shallowMount(ErrorView);
    expect(wrapper.exists()).toBe(true);
  });
  it("Has required components", async () => {
    wrapper = mount(ErrorView);
    expect(wrapper.findComponent({ name: "DefaultLayout" }).exists()).toBe(
      true
    );
  });
});
