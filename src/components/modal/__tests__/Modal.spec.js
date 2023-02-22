import Vuex from "vuex";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue } from "@vue/test-utils";

// Components
import Modal from "../Modal.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
	state: {
		showModal: true,
	},
});

describe("Modal", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = mount(Modal, { localVue, store });
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Act
		const divs = wrapper.findAll("div");
		const spans = wrapper.findAll("span");

		// Assert
		expect(divs.exists()).toBe(true);
		expect(divs).toHaveLength(4);
		expect(spans.exists()).toBe(true);
		expect(spans).toHaveLength(1);
	});

	[
		{ element: "div", clx: "modal" },
		{ element: "div", clx: "modal-active" },
		{ element: "div", clx: "modal-content" },
		{ element: "div", clx: "flex-row-end" },
		{ element: "span", clx: "close" },
		{ element: "div", clx: "modal-slot-content" },
	].forEach(({ element, clx }) =>
		it("has correct css classes", () => {
			// Act
			const elements = wrapper.findAll(element);
			const filteredElements = elements.filter((el) => el.classes(clx));

			// Assert
			expect(filteredElements).toHaveLength(1);
		})
	);

	it("should call closeModal on click", async () => {
		// Arrange
		const spy = vi.spyOn(Modal.methods, "closeModal");
		wrapper = mount(Modal, { localVue, store });

		// Act
		const span = await wrapper.find("span");
		await span.trigger("click");

		// Assert
		expect(spy).toBeCalled();
	});
});
