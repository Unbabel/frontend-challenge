import { mount } from "@vue/test-utils";
import InputCheckbox from "../InputCheckbox.vue";

describe("InputCheckbox component", () => {
  it("renders correctly", () => {
    const wrapper = mount(InputCheckbox);
    expect(wrapper.html()).toContain("checkbox");
    expect(wrapper.html()).toContain("checkbox-mark");
    expect(wrapper.html()).toContain("input");
  });
});
