import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ListItem from "@/components/ListItem/ListItem.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ListItem.vue", () => {
  //Check if component renders
  //Check if finds components
  //title
  //checkbox
  //button
  //Check if has ListItem class
  //Check if recives list item
  //Check if renders title
  //Check if renders text
  //Check if click event to delete item
  //Check if click event to check item
  let wrapper;
  let templateObject = { id: 1, text: "Text", voice: "Voice" };
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      DELETE_ITEM: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        list: {
          namespaced: true,
          actions,
        },
      },
    });
  });

  it("Component renders", () => {
    wrapper = shallowMount(ListItem, {
      propsData: { item: templateObject },
    });
    expect(wrapper.exists()).toBe(true);
  });
  it("Has required components", async () => {
    wrapper = shallowMount(ListItem, {
      propsData: { item: templateObject },
    });

    expect(wrapper.findComponent({ name: "Checkbox" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "Title" }).exists()).toBe(true);

    await wrapper.setData({ isHovered: true });
    expect(wrapper.findComponent({ name: "Button" }).exists()).toBe(true);
  });
  it("Has ListItem class", () => {
    wrapper = shallowMount(ListItem, {
      propsData: { item: templateObject },
    });
    expect(wrapper.get(".qa-list-item").classes("c-list-item")).toBe(true);
  });
  it("Receives list item", () => {
    wrapper = shallowMount(ListItem, {
      propsData: { item: templateObject },
    });
    expect(wrapper.props().item).toMatchObject(templateObject);
  });
  it("Renders Title", () => {
    wrapper = mount(ListItem, {
      propsData: { item: templateObject },
    });

    expect(wrapper.findComponent({ name: "Title" }).props("text")).toMatch(
      templateObject.voice
    );
  });
  it("Renders Text", () => {
    wrapper = shallowMount(ListItem, {
      propsData: { item: templateObject },
    });
    expect(wrapper.find(".qa-list-item__text").text()).toMatch(
      templateObject.text
    );
  });
  it("Emits check change event", async () => {
    wrapper = mount(ListItem, {
      propsData: { item: templateObject },
    });

    await wrapper.find(".qa-checkbox__input").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("select");
  });
  it("Emits delete event", async () => {
    wrapper = mount(ListItem, {
      store,
      localVue,
      propsData: { item: templateObject },
    });
    await wrapper.setData({ isHovered: true });
    await wrapper.find(".qa-button").trigger("click");
    expect(actions.DELETE_ITEM).toHaveBeenCalled();
  });
});
