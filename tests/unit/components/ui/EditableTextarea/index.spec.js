import { shallowMount } from "@vue/test-utils";

import EditableTextarea from "@/components/ui/EditableTextarea";

describe("@/components/ui/EditableTextarea", () => {
  const item = {
    id: 1,
    voice: "1",
    text: "1"
  };
  it("renders span tag", () => {
    const wrapper = shallowMount(EditableTextarea);
    expect(wrapper.contains("div")).toBe(true);
  });
  it("renders svg tag", () => {
    const wrapper = shallowMount(EditableTextarea);
    expect(wrapper.contains("p")).toBe(true);
  });
  it("renders svg tag", () => {
    const wrapper = shallowMount(EditableTextarea);
    expect(wrapper.contains("textarea")).toBe(true);
  });
});
