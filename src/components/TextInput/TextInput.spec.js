import { shallowMount } from "@vue/test-utils";
import TextInput from "@/components/TextInput/TextInput.vue";

describe("TextInput.vue", () => {
  //Check if component renders
  //Check if it has text input class
  //Check if text is passed
  //Check if event is emitted
  let wrapper;
  const text = "My Text";
  it("Component renders", () => {
    wrapper = shallowMount(TextInput);
    expect(wrapper.exists()).toBe(true);
  });
  it("Has Text Input class", () => {
    wrapper = shallowMount(TextInput);
    expect(wrapper.find(".qa-text-input").classes("c-text-input")).toBe(true);
  });
  it("Passed text is rendered", () => {
    wrapper = shallowMount(TextInput, {
      propsData: { text: text },
    });
    expect(wrapper.find(".qa-text-input").element.value).toMatch(text);
  });
  it("Input event works", async () => {
    const newText = "New text";
    wrapper = shallowMount(TextInput, {
      propsData: { text: text },
    });

    await wrapper.setValue(newText);
    await wrapper.find(".qa-text-input").trigger("input");
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted().input[0]).toEqual([newText]);
  });
});
