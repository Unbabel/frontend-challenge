import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";

// Components
import Content from "../Content.vue";

describe("Content", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = mount(Content);
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Act
		const div = wrapper.find("div");

		// Assert
		expect(div.exists()).toBe(true);
	});
});
