import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";

// Components
import Layout from "../Layout.vue";
import TopBar from "../../top-bar/TopBar.vue";
import Content from "../../content/Content.vue";

describe("Layout", () => {
  let wrapper;

  beforeEach(() => {
    // Arrange
    wrapper = mount(Layout, { propsData: {} });
  });

  it("matches snapshot", () => {
    // Assert
    expect(wrapper).toMatchSnapshot();
  });

  it("renders properly", () => {
    // Act
    const topbar = wrapper.findComponent(TopBar);
    const content = wrapper.findComponent(Content);

    // Assert
    expect(topbar.exists()).toBe(true);
    expect(content.exists()).toBe(true);
  });
});
