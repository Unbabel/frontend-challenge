import Vuex from "vuex";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";

// Components
import Layout from "../Layout.vue";
import TopBar from "../../top-bar/TopBar.vue";
import Content from "../../content/Content.vue";
import AccessibilityOptions from "../../acessibility-options/AccessibilityOptions.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const $route = {
	fullPath: "full/path",
};

const store = new Vuex.Store({
	state: {
		showModal: true,
		accessibilityOptions: {
			elder: false,
		},
	},
});

describe("Layout", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = shallowMount(Layout, {
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
		// Act
		const topbar = wrapper.findComponent(TopBar);
		const content = wrapper.findComponent(Content);
		const accessibilityOptions =
			wrapper.findComponent(AccessibilityOptions);

		// Assert
		expect(topbar.exists()).toBe(true);
		expect(content.exists()).toBe(true);
		expect(accessibilityOptions.exists()).toBe(true);
	});
});
