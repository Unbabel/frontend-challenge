import { shallowMount } from "@vue/test-utils";
import Checkbox from "@/components/Checkbox/Checkbox.vue";

describe("Checkbox.vue", () => {
  //Check if component renders
  //Check if text is passed
  //Check if checked is passed
  //Check if it has Checkbox class
  //Check if we can toggle checkmark
  //Check if click event happens
  let wrapper;
  it("Component renders", () => {
    wrapper = shallowMount(Checkbox);
    expect(wrapper.exists()).toBe(true);
  });
  it("Passed text is rendered", () => {
    const text = "My Checkbox";
    wrapper = shallowMount(Checkbox, {
      propsData: { text: text },
    });
    expect(wrapper.find(".qa-checkbox__label").text()).toMatch(text);
  });
  it("Passed checked is rendered", () => {
    wrapper = shallowMount(Checkbox, {
      propsData: { checked: true },
    });
    expect(wrapper.find(".qa-checkbox__input").attributes("value")).toBe(
      "true"
    );
  });
  it("Has Checkbox class", () => {
    wrapper = shallowMount(Checkbox);
    expect(wrapper.find(".qa-checkbox").classes("c-checkbox")).toBe(true);
  });
  it("Can toggle checkbox", async () => {
    wrapper = shallowMount(Checkbox);
    await wrapper.find(".qa-checkbox__input").trigger("click");
    expect(wrapper.find(".qa-checkbox__input").element.checked).toBe(true);

    await wrapper.find(".qa-checkbox__input").trigger("click");
    expect(wrapper.find(".qa-checkbox__input").element.checked).toBe(false);
  });
  it("Click event works", () => {
    wrapper = shallowMount(Checkbox, {
      propsData: { checked: true },
    });

    wrapper.find(".qa-checkbox__input").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("change");
    expect(wrapper.emitted().change[0]).toEqual([false]);
  });
});
