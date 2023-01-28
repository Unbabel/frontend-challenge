import { shallowMount, mount } from "@vue/test-utils";
import TopMenu from "@/components/TopMenu/TopMenu.vue";

describe("TopMenu.vue", () => {
  //Check if component renders
  //Check if title component exists
  //Check if it has TopMenu class
  //Check if slot content is rendered
  let wrapper;
  const text = "My Title";
  const htmlContent = "<h1>Content for slot</h1>";
  it("Component renders", () => {
    wrapper = shallowMount(TopMenu);
    expect(wrapper.exists()).toBe(true);
  });
  it("Has TopMenu class", () => {
    wrapper = shallowMount(TopMenu);
    expect(wrapper.find(".qa-top-menu").classes("c-top-menu")).toBe(true);
  });
  it("Has Title component", () => {
    wrapper = mount(TopMenu, {
      propsData: { title: text },
    });
    expect(wrapper.findComponent({ name: "Title" }).exists()).toBe(true);
  });
  it("Content is slot is rendered", () => {
    wrapper = shallowMount(TopMenu, {
      propsData: { title: text },
      slots: {
        default: htmlContent,
      },
    });
    expect(wrapper.html()).toContain(htmlContent);
  });
});
