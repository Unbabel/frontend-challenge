import { shallowMount } from "@vue/test-utils";
import { specHelpers } from "@/components/before-all";
import TranscriptionsToolbar from "./TranscriptionsToolbar.vue";

beforeAll(() => { specHelpers() });

describe("TranscriptionsToolbar.vue", () => {
  it("renders TranscriptionsToolbar when passed", () => {
    const msg = "Transcriptions Challenge";
    const wrapper = shallowMount(TranscriptionsToolbar);
    expect(wrapper.text()).toMatch(msg);

  });
});
