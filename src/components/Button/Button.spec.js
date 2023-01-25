import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button/Button.vue";

describe("Button.vue", () => {
  //Check if component renders
  //Check if text is passed
  //Check if it has button class
  //Check if click event happens
  let wrapper;
  it("Component renders", () => {
    wrapper = shallowMount(Button);
    expect(wrapper.exists()).toBe(true);
  });
  it("Passed text is rendered", () => {
    const text = "My button";
    wrapper = shallowMount(Button, {
      propsData: { text: text },
    });
    expect(wrapper.find(".qa-button").text()).toMatch(text);
  });
  it("Has button class", () => {
    wrapper = shallowMount(Button);
    expect(wrapper.find(".qa-button").classes("c-button")).toBe(true);
  });
  it("Click event works", async () => {
    wrapper = shallowMount(Button);

    await wrapper.find(".qa-button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
