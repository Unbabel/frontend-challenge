import { describe, it, expect, beforeEach, vi } from "vitest";

import { mount } from "@vue/test-utils";

// Components
import ToggleButton from "../ToggleButton.vue";

const mockFn = vi.fn();

describe("ToggleButton", () => {
	let wrapper;
	let testProps = { checked: true, onChangeCallback: mockFn };

	beforeEach(() => {
		// Arrange
		wrapper = mount(ToggleButton, {
			propsData: testProps,
		});
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Assert
		const label = wrapper.find("label");
		const input = wrapper.find("input");
		const span = wrapper.find("span");

		expect(label.exists()).toBe(true);
		expect(input.exists()).toBe(true);
		expect(span.exists()).toBe(true);
	});

	it("has correct classes", () => {
		// Assert
		const label = wrapper.find("label");
		const span = wrapper.find("span");

		expect(label.classes()).toContain("switch");
		expect(span.classes()).toContain("slider");
	});

	it("toggles between checked and not checked on click", async () => {
		// Arrange
		const checked = true;
		const notChecked = false;
		const input = await wrapper.find("input");

		// Assert
		expect(input.element.checked).toBe(checked);

		// Act
		await input.trigger("click");

		// Assert
		expect(input.element.checked).toBe(notChecked);
	});
});
