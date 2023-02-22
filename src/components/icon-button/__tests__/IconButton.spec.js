import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";

// Components
import IconButton from "../IconButton.vue";

describe("IconButton", () => {
  let wrapper;
  let testProps = { icon: "/src/assets/upload.svg" };

  beforeEach(() => {
    // Arrange
    wrapper = mount(IconButton, {
      propsData: testProps,
    });
  });

  it("matches snapshot", () => {
    // Assert
    expect(wrapper).toMatchSnapshot();
  });

  it("has an image element with source defined", () => {
    // Assert
    const imageEl = wrapper.find("img");
    expect(imageEl.exists()).toBe(true);
    expect(imageEl.attributes("src")).toBe("/src/assets/upload.svg");
  });

  it("should trigger emit on click event", async () => {
    // Act
    await wrapper.trigger("click");

    // Assert
    expect(wrapper.emitted().onClickCallback.length).toBe(1);
  });
});
