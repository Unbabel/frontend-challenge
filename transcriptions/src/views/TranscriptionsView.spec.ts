import { shallowMount } from "@vue/test-utils";
import { specHelpers } from "@/components/before-all";
import TranscriptionsView from "./TranscriptionsView.vue";

beforeAll(() => { specHelpers() });

describe("TranscriptionsView.vue", () => {
  it("renders TranscriptionsView", () => {
    const wrapper = shallowMount(TranscriptionsView);
    expect(wrapper.html()).toContain("transcriptions-toolbar");
    expect(wrapper.html()).toContain("transcriptions-grid");
  });
});
