import { shallowMount } from "@vue/test-utils";
import TextArea from "@/components/TextArea/TextArea.vue";

describe("TextArea.vue", () => {
  //Check if component renders
  //Check if it has text input class
  //Check if text is passed
  //Check if event is emitted
  let wrapper;
  const text = "My Text";
  it("Component renders", () => {
    wrapper = shallowMount(TextArea);
    expect(wrapper.exists()).toBe(true);
  });
  it("Has Text Input class", () => {
    wrapper = shallowMount(TextArea);
    expect(wrapper.find(".qa-text-area").classes("c-text-area")).toBe(true);
  });
  it("Passed text is rendered", () => {
    wrapper = shallowMount(TextArea, {
      propsData: { text: text },
    });
    expect(wrapper.find(".qa-text-area").element.value).toMatch(text);
  });
  it("Input event works", async () => {
    const newText = "New text";
    wrapper = shallowMount(TextArea, {
      propsData: { text: text },
    });

    await wrapper.setValue(newText);
    await wrapper.find(".qa-text-area").trigger("input");
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted().input[0]).toEqual([newText]);
  });
});
