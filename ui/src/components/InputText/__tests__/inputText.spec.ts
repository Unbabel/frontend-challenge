import { mount, shallowMount } from "@vue/test-utils";
import InputText from "../InputText.vue";

const props = {
  tag: "h2",
  editAction: jest.fn(),
  type: "voice",
  content: "test content",
  classes: "edit",
};

describe("InputText component", () => {
  it("renders text correctly", () => {
    const wrapper = mount(InputText, { props });
    expect(wrapper.html()).toContain(props.content);
  });

  it("can edit", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockMethod = jest.spyOn(InputText.methods as any, "edit");

    await shallowMount(InputText, { props }).find(".edit").trigger("click");
    expect(mockMethod).toHaveBeenCalled();
  });
});
