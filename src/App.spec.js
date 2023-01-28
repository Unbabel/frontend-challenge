import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";

describe("App.vue", () => {
  //Check if component renders
  let wrapper;
  it("Component renders", () => {
    wrapper = shallowMount(App, { stubs: ["router-view"] });
    expect(wrapper.exists()).toBe(true);
  });
});
