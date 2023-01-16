import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PageHeader from "../PageHeader.vue";

describe("PageHeader component", () => {
  it("renders properly", () => {
    const shouldDisplay = "This is a page title";
    const wrapper = mount(PageHeader, {
      propsData: { pageTitle: shouldDisplay },
    });
    expect(wrapper.find(".page-title").text()).toContain(shouldDisplay);
  });
});
