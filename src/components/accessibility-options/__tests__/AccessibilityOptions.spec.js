import Vuex from "vuex";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";

// Components
import AccessibilityOptions from "../AccessibilityOptions.vue";
import Modal from "../../modal/Modal.vue";
import ToggleButton from "../../toggle-button/ToggleButton.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
	state: {
		showModal: false,
		accessibilityOptions: {
			elder: false,
			colorBlindness: false,
		},
	},
	actions: {
		toggleModalVisibility: () => true,
		toggleAccessibilityOption: () => true,
	},
});

describe("AccessibilityOptions", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		vi.restoreAllMocks();
		wrapper = shallowMount(AccessibilityOptions, { localVue, store });
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders the child components properly", () => {
		// Act
		const modal = wrapper.findComponent(Modal);
		const toggleButtons = wrapper.findAllComponents(ToggleButton);

		// Assert
		expect(modal.exists()).toBe(true);
		expect(toggleButtons.exists()).toBe(true);
		expect(toggleButtons).toHaveLength(2);
	});

	it("renders the accessibility options title", () => {
		// Assert
		expect(wrapper.text()).toContain("Accessibility Profiles");
	});

	it("has correct accessibility options", () => {
		// Assert
		expect(wrapper.text()).toContain("Elder");
		expect(wrapper.text()).toContain("Color Blindness");
		expect(wrapper.text()).not.toContain("Unknown Option");
	});

	it("calls toggleElderMode on toggle button click", () => {
		// Arrange
		const spy = vi.spyOn(AccessibilityOptions.methods, "toggleElderMode");
		wrapper = mount(AccessibilityOptions, { localVue, store });

		// Act
		const toggleButtons = wrapper.findAll('[data-test="toggle-button"]');
		toggleButtons.at(0).trigger("click");

		// Assert
		expect(spy).toBeCalled();
	});

	it("calls toggleColorBlindness on toggle button click", () => {
		// Arrange
		const spy = vi.spyOn(
			AccessibilityOptions.methods,
			"toggleColorBlindness"
		);
		wrapper = mount(AccessibilityOptions, { localVue, store });

		// Act
		const toggleButtons = wrapper.findAll('[data-test="toggle-button"]');
		toggleButtons.at(1).trigger("click");

		// Assert
		expect(spy).toBeCalled();
	});

	it("calls openModal on accessibility button click", () => {
		// Arrange
		const spy = vi.spyOn(AccessibilityOptions.methods, "openModal");
		wrapper = mount(AccessibilityOptions, { localVue, store });

		// Act
		const btn = wrapper.find('[data-test="accessibility-div"]');
		btn.trigger("click");

		// Assert
		expect(spy).toBeCalled();
	});

	[
		{ clx: "accessibility-container" },
		{ clx: "accessibility" },
		{ clx: "accessibility-options-grid" },
	].forEach(({ clx }) =>
		it("has correct css classes", () => {
			// Act
			const divs = wrapper.findAll("div");
			const filteredDiv = divs.filter((div) => div.classes(clx));

			// Assert
			expect(filteredDiv).toHaveLength(1);
		})
	);
});
