import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import TranscriptionListItem from "../TranscriptionsListItem.vue";
import TranscriptionReadModel from "@/models/TranscriptionReadModel";

const transcription = {
  id: 2,
  voice: "Voice 1",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
};

describe("TranscriptionsListItem component", () => {
  let mockedTranscription;

  beforeEach(() => {
    mockedTranscription = new TranscriptionReadModel(transcription);
  });

  it("exists", () => {
    expect(TranscriptionListItem).toBeTruthy();
  });

  it("renders properly", () => {
    const wrapper = mount(TranscriptionListItem, {
      propsData: {
        transcription: mockedTranscription,
      },
    });

    expect(wrapper.classes()).toContain("transcription-list-item");

    expect(wrapper.find(".list-item-title").text()).toBe(transcription.voice);
    expect(wrapper.find(".list-item-text").text()).toBe(transcription.text);
  });
});
