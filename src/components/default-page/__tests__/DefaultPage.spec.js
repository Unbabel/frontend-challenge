import { describe, it, expect, beforeEach, vi } from "vitest";

import { mount } from "@vue/test-utils";

// Components
import DefaultPage from "../DefaultPage.vue";

const mockHandler = vi.fn();

describe("DefaultPage", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = mount(DefaultPage, {
			propsData: {
				imageSrc: "/path/to/image",
				pageLabel: "Default Page",
				btnLabel: "Click Me",
				btnHandler: mockHandler,
			},
		});
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Act
		const div = wrapper.findAll("div");
		const image = wrapper.findAll("img");
		const span = wrapper.findAll("span");
		const button = wrapper.findAll("button");

		// Assert
		expect(div.exists()).toBe(true);
		expect(div).toHaveLength(1);
		expect(image.exists()).toBe(true);
		expect(image).toHaveLength(1);
		expect(span.exists()).toBe(true);
		expect(span).toHaveLength(1);
		expect(button.exists()).toBe(true);
		expect(button).toHaveLength(1);
	});

	[
		{ el: "div", clx: "default-page-container" },
		{ el: "div", clx: "flex-center" },
		{ el: "img", clx: "default-page-img" },
		{ el: "span", clx: "default-page-label" },
		{ el: "button", clx: "default-page-btn" },
	].forEach(({ el, clx }) =>
		it("has correct css classes", () => {
			// Act
			const element = wrapper.find(el);

			// Assert
			expect(element.classes(clx)).toBe(true);
		})
	);

	it("should call btnHandler on button click", () => {
		// Act
		wrapper.find("button").trigger("click");

		// Assert
		expect(mockHandler).toBeCalled();
		expect(mockHandler).toBeCalledTimes(1);
	});
});
