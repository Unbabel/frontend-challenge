import { describe, it, expect, beforeEach, vi } from "vitest";

import { mount } from "@vue/test-utils";

// Components
import Input from "../Input.vue";

const mockCallback = vi.fn();
const mockFitToContent = vi.fn();
const mockGetClasses = vi.fn().mockImplementation(() => "colorBlindness");

describe("Input", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = mount(Input, {
			propsData: {
				value: null,
				placeholder: "Insert text",
				onChangeCallback: mockCallback,
			},
			methods: {
				fitToContent: mockFitToContent,
				getClasses: mockGetClasses,
			},
		});
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Act
		const textarea = wrapper.findAll("textarea");

		// Assert
		expect(textarea.exists()).toBe(true);
		expect(textarea).toHaveLength(1);
	});

	it("has correct classes", () => {
		// Assert
		expect(wrapper.classes()).toContain("colorBlindness");
	});
});
