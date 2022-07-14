import { shallowMount } from "@vue/test-utils";
import { specHelpers } from "@/components/before-all";
import TranscriptionsAdd from "./TranscriptionsAdd.vue";

beforeAll(() => { specHelpers() });

describe("TranscriptionsAdd.vue", () => {
  it("renders TranscriptionsAdd when passed", () => {
    const wrapper = shallowMount(TranscriptionsAdd);
    expect(wrapper.html()).toContain("add-toolbar");
  });
});
