import Vuex from "vuex";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue } from "@vue/test-utils";

// Components
import TopBar from "../TopBar.vue";
import PageTitle from "../../page-title/PageTitle.vue";
import IconButton from "../../icon-button/IconButton.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const $route = {
	path: "/",
	name: "transcriptions",
	component: null,
	meta: {
		actions: {
			icon: "/path/to/icon.svg",
			callback: vi.fn(),
		},
	},
};

const store = new Vuex.Store({});

describe("TopBar", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = mount(TopBar, {
			localVue,
			store,
			mocks: {
				$route,
			},
		});
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Assert
		const pageTitle = wrapper.findComponent(PageTitle);
		const iconButton = wrapper.findComponent(IconButton);
		const divs = wrapper.findAll("div");

		expect(pageTitle.exists()).toBe(true);
		expect(iconButton.exists()).toBe(true);
		expect(divs.exists()).toBe(true);
		expect(divs).toHaveLength(3);
	});

	[
		{ element: "div", clx: "top-bar-container" },
		{ element: "div", clx: "top-bar-inner-container" },
		{ element: "div", clx: "flex-center", cardinality: 2 },
		{ element: "div", clx: "flex-center-row", cardinality: 2 },
		{ element: "div", clx: "top-bar-actions-container" },
	].forEach(({ element, clx, cardinality = 1 }) =>
		it("has correct css classes", () => {
			// Act
			const elements = wrapper.findAll(element);
			const filteredElements = elements.filter((el) => el.classes(clx));

			// Assert
			expect(filteredElements).toHaveLength(cardinality);
		})
	);
});
