import { shallowMount } from "@vue/test-utils";

import Icon from "@/components/ui/Icon";

describe("@/components/ui/Icon", () => {
  it("renders span tag", () => {
    const wrapper = shallowMount(Icon);
    expect(wrapper.contains("span")).toBe(true);
  });
  it("renders svg tag", () => {
    const wrapper = shallowMount(Icon);
    expect(wrapper.contains("svg")).toBe(true);
  });
});
