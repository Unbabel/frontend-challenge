import Vuex from "vuex";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";

// Components
import Item from "../Item.vue";
import ItemTitle from "../item-title/ItemTitle.vue";
import ItemBody from "../item-body/ItemBody.vue";
import Checkbox from "../../checkbox/Checkbox.vue";
import IconButton from "../../icon-button/IconButton.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({});

describe("Item", () => {
	let wrapper;
	let propsData = {
		itemId: "1",
		title: "This is some title text",
		content: "This is some content text",
	};

	beforeEach(() => {
		// Arrange
		wrapper = mount(Item, {
			propsData,
			localVue,
			store,
		});
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Act
		const itemTitle = wrapper.findComponent(ItemTitle);
		const itemBody = wrapper.findComponent(ItemBody);
		const checkbox = wrapper.findComponent(Checkbox);
		const iconButton = wrapper.findComponent(IconButton);

		// Assert
		expect(itemTitle.exists()).toBe(true);
		expect(itemBody.exists()).toBe(true);
		expect(checkbox.exists()).toBe(true);
		expect(iconButton.exists()).toBe(true);
	});

	it("ItemTitle has correct text", () => {
		// Act
		const itemTitle = wrapper.findComponent(ItemTitle);

		// Assert
		expect(itemTitle.props("text")).toBe("This is some title text");
	});

	it("ItemBody has correct content", () => {
		// Act
		const itemBody = wrapper.findComponent(ItemBody);

		// Assert
		expect(itemBody.props("content")).toBe("This is some content text");
	});

	[
		{ element: "div", clx: "item-container" },
		{ element: "div", clx: "grid-container" },
		{ element: "div", clx: "item-title-wrapper" },
		{ element: "div", clx: "text-margin", cardinality: 2 },
		{ element: "span", clx: "delete-span" },
		{ element: "div", clx: "empty-cell", cardinality: 2 },
		{ element: "div", clx: "item-body-wrapper" },
	].forEach(({ element, clx, cardinality = 1 }) =>
		it("has correct css classes", () => {
			// Act
			const elements = wrapper.findAll(element);
			const filteredElements = elements.filter((el) => el.classes(clx));

			// Assert
			expect(filteredElements).toHaveLength(cardinality);
		})
	);

	it('should have "visible" class on hover', async () => {
		// Act
		const firstDiv = await wrapper.findAll("div").at(0);
		await firstDiv.trigger("mouseover");

		// Assert
		const span = await wrapper.find("span");
		expect(span.classes("visible")).toBe(true);
	});

	it("should call editListItemTitle", async () => {
		// Arrange
		const spy = vi.spyOn(Item.methods, "editListItemTitle");
		wrapper = mount(Item, { propsData, localVue, store });

		// Act
		const itemTitle = wrapper.findComponent(ItemTitle);
		await itemTitle.trigger("input", { value: "Teste" });

		// Assert
		expect(spy).toBeCalled();
	});

	it("should call editListItemBody", async () => {
		// Arrange
		const spy = vi.spyOn(Item.methods, "editListItemBody");
		wrapper = mount(Item, { propsData, localVue, store });

		// Act
		const itemBody = wrapper.findComponent(ItemBody);
		await itemBody.trigger("input", { value: "Teste" });

		// Assert
		expect(spy).toBeCalled();
	});

	it("should call onDeleteCallback", async () => {
		// Arrange
		const spy = vi.spyOn(Item.methods, "onDeleteCallback");
		wrapper = mount(Item, { propsData, localVue, store });

		// Act
		const firstDiv = await wrapper.findAll("div").at(0);
		await firstDiv.trigger("mouseover");

		const iconButton = wrapper.findComponent(IconButton);
		await iconButton.trigger("click");

		// Assert
		expect(spy).toBeCalled();
	});

	it("should call deleteListItem", async () => {
		// Arrange
		const spy = vi.spyOn(Item.methods, "deleteListItem");
		wrapper = mount(Item, { propsData, localVue, store });

		// Act
		const firstDiv = await wrapper.findAll("div").at(0);
		await firstDiv.trigger("mouseover");

		const iconButton = wrapper.findComponent(IconButton);
		await iconButton.trigger("click");

		// Assert
		expect(spy).toBeCalled();
	});
});
