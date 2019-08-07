import { shallowMount } from "@vue/test-utils";

import Logo from "./index.vue";

describe("@/components/ui/Logo", () => {
  it("renders anchor tag", () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.contains("router-link")).toBe(true);
  });
  it("renders h1 tag", () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.contains("h1")).toBe(true);
  });
});
