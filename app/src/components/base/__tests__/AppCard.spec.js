import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AppCard from "../AppCard.vue";

describe("AppCard component", () => {
  it("renders properly", () => {
    const wrapper = mount(AppCard);
    expect(wrapper.classes()).toContain("app-card");
  });
});
