import { shallowMount } from "@vue/test-utils";

import Logo from "@/components/ui/Logo";

describe("@/components/ui/Logo", () => {
  it("renders anchor tag", () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.contains("a")).toBe(true);
  });
  it("renders h1 tag", () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.contains("h1")).toBe(true);
  });
});
