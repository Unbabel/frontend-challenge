import { shallowMount } from "@vue/test-utils";
import Title from "@/components/Title/Title.vue";

describe("Title.vue", () => {
  //Check if component renders
  //Check if it has title class
  //Check if text is passed
  //Check if type is passed
  let wrapper;
  const text = "My Title";
  const types = ["h1", "h2", "h3", "h4", "h5", "h6"];
  it("Component renders", () => {
    wrapper = shallowMount(Title);
    expect(wrapper.exists()).toBe(true);
  });
  it("Has Title class", () => {
    wrapper = shallowMount(Title);
    expect(wrapper.find(".qa-title").classes("c-title")).toBe(true);
  });
  it("Passed text is rendered", () => {
    wrapper = shallowMount(Title, {
      propsData: { text: text },
    });
    expect(wrapper.find(".qa-title").text()).toMatch(text);
  });
  it("Passed type is rendered", async () => {
    wrapper = shallowMount(Title, {
      propsData: { text: text },
    });

    for (let i in types) {
      await wrapper.setProps({ type: types[i] });
      expect(wrapper.find(types[i]).exists()).toBe(true);
    }
  });
});
