import Vuex from "vuex";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";

// Components
import ItemTitle from "../ItemTitle.vue";
import Input from "../../../input/Input.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({});

describe("ItemTitle", () => {
	let wrapper;

	beforeEach(() => {
		// Arrange
		wrapper = shallowMount(ItemTitle, {
			propsData: {
				text: "This is some title text",
			},
		});
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Act
		const input = wrapper.findComponent(Input);

		// Assert
		expect(input.exists()).toBe(true);
	});

	it("input has correct classes", () => {
		// Act
		const input = wrapper.findComponent(Input);

		// Assert
		expect(input.props("customStyles")).toBe("title-styles");
	});

	it("input has correct placeholder", () => {
		// Act
		const input = wrapper.findComponent(Input);

		// Assert
		expect(input.props("placeholder")).toBe("Insert title...");
	});

	it("input has correct value", () => {
		// Act
		const input = wrapper.findComponent(Input);

		// Assert
		expect(input.props("value")).toBe("This is some title text");
	});

	it("should call onChangeHandler", async () => {
		// Arrange
		const spy = vi.spyOn(Input.methods, "onChangeHandler");
		wrapper = mount(ItemTitle, { localVue, store });

		// Act
		const input = wrapper.findComponent(Input);
		await input.trigger("input", { value: "Teste" });

		// Assert
		expect(spy).toBeCalled();
	});
});
