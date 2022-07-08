import { shallowMount } from "@vue/test-utils";
import { specHelpers } from "@/components/before-all";
import TranscriptionsGrid from "./TranscriptionsGrid.vue";

beforeAll(() => { specHelpers() });

describe("TranscriptionsGrid.vue", () => {
  it("renders TranscriptionsGrid", () => {
    const wrapper = shallowMount(TranscriptionsGrid);
    expect(wrapper.html()).toContain("main");
  });
});
