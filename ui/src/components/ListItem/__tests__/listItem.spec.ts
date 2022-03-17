import { mount, shallowMount } from "@vue/test-utils";
import { createNewListItem } from "@/utils/helpers";
import ListItem from "../ListItem.vue";

const props = {
  item: createNewListItem(),
  deleteAction: jest.fn(),
  updateAction: jest.fn(),
};

describe("ListItem component", () => {
  it("renders correctly", () => {
    const wrapper = mount(ListItem, { props });
    expect(wrapper.html()).toContain("Profile picture");
  });

  it("can remove item", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockMethod = jest.spyOn(ListItem.methods as any, "removeItem");

    await shallowMount(ListItem, { props })
      .find(".item-action--remove")
      .trigger("click");
    expect(mockMethod).toHaveBeenCalled();
  });
});
