import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";

// Components
import Checkbox from "../Checkbox.vue";

describe("Checkbox", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = mount(Checkbox, { propsData: { id: "test-checkbox" } });
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("is checked by default", () => {
		// Act
		const input = wrapper.find("input");

		// Assert
		expect(input.attributes().checked).toBe("checked");
	});

	it("has correct css classes", () => {
		// Act
		const input = wrapper.find("input");

		// Assert
		expect(wrapper.classes("checkbox-div")).toBe(true);
		expect(input.classes("css-checkbox")).toBe(true);
	});
});
