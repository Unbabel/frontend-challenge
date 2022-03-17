import fetchMock from "fetch-mock";
import { mount, shallowMount } from "@vue/test-utils";
import HeaderToolbar from "../Toolbar.vue";

fetchMock.mock("*", []);

const wrapper = mount(HeaderToolbar);

describe("Toolbar component", () => {
  it("renders correctly", () => {
    const html = wrapper.html();

    expect(html).toContain("Transcriptions");
    expect(html).toContain("Upload transcriptions");
  });

  it("can get content", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockMethod = jest.spyOn(HeaderToolbar.methods as any, "getContent");

    await shallowMount(HeaderToolbar)
      .find(".toolbar-action--get")
      .trigger("click");
    expect(mockMethod).toHaveBeenCalled();
  });

  it("can upload content", async () => {
    const mockMethod = jest.spyOn(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      HeaderToolbar.methods as any,
      "uploadContent"
    );

    await shallowMount(HeaderToolbar)
      .find(".toolbar-action--upload")
      .trigger("click");
    expect(mockMethod).toHaveBeenCalled();
  });
});
