import { shallowMount } from "@vue/test-utils";
import { specHelpers } from "@/components/before-all";
import TranscriptionCard from "./TranscriptionCard.vue";

beforeAll(() => { specHelpers() });

describe("TranscriptionCard.vue", () => {
  it("renders TranscriptionCard", () => {
    const wrapper = shallowMount(TranscriptionCard, { props: { item: { id: 1, voice: "voice", text: "text" } }});
    expect(wrapper.html()).toContain("grid item");
  });
});
