import { shallowMount, mount } from "@vue/test-utils";
import List from "@/components/List/List.vue";

describe("List.vue", () => {
  // Check if component renders
  // Check if finds ListItem components
  // Check if has List class
  // Check if recive list of elements
  // Check if renders list of elements
  // Check if it receives check state of checkboxes
  // Check if receives delete event
  // Check if click event to add item

  let wrapper;
  let firstItem;
  let templateObject = { id: 1, voice: "Voice", text: "Text" };
  let list = [
    { id: 1, voice: "Voice", text: "Text" },
    { id: 2, voice: "Voice2", text: "Text2" },
    { id: 3, voice: "Voice3", text: "Text3" },
  ];
  it("Component renders", () => {
    wrapper = shallowMount(List);
    expect(wrapper.exists()).toBe(true);
  });
  it("Receives list of items", () => {
    wrapper = shallowMount(List, {
      propsData: { list: list },
    });
    expect(wrapper.props().list.length).toBeGreaterThan(0);
    expect(wrapper.props().list[0]).toMatchObject(templateObject);
  });
  it("Renders list of items", () => {
    wrapper = mount(List, {
      propsData: { list: list },
    });
    expect(
      wrapper.findAllComponents({ name: "ListItem" }).length
    ).toBeGreaterThan(0);
  });
  it("Has ListItem component", () => {
    wrapper = mount(List, {
      propsData: { list: list },
    });

    expect(wrapper.findComponent({ name: "ListItem" }).exists()).toBe(true);
  });
  it("Add item event", async () => {
    wrapper = mount(List, {
      propsData: { list: [] },
    });

    await wrapper.findComponent({ name: "Button" }).trigger("click");
    expect(wrapper.emitted()).toHaveProperty("add");

    await wrapper.setProps({ list: [templateObject] });
    expect(wrapper.props('list').length).toBeGreaterThan(0);
  });
});
