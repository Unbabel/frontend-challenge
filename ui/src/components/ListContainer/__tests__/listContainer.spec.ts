import { mount, shallowMount } from "@vue/test-utils";
import ListContainer from "../ListContainer.vue";

describe("ListContainer component", () => {
  it("renders correctly", () => {
    const wrapper = mount(ListContainer);
    expect(wrapper.html()).toContain("Add a new row to the list");
  });

  it("renders no list", () => {
    const wrapper = mount(ListContainer);
    expect(wrapper.find("ul")).toBeUndefined;
  });

  it("can add item", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockMethod = jest.spyOn(ListContainer.methods as any, "addItem");

    await shallowMount(ListContainer).find(".list-add").trigger("click");
    expect(mockMethod).toHaveBeenCalled();
  });
});
