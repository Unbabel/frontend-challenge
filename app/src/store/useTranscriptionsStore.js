/**
 * TRANSCRIPITIONS RESOURCE STORE
 * Hope you don't mind not using VueX. My time restrictions demanded for a more pragmatic a simpler approach.
 */
import { reactive, computed } from "vue";
import TranscriptionReadModel from "../models/TranscriptionReadModel";

const INITIAL_STATE = {
  transcriptions: [
    {
      id: 1,
      voice: "Voice 2",
      text: "This is a one line sentence made to show how it fits",
    },
    {
      id: 2,
      voice: "Voice 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    },
    {
      id: 3,
      voice: "Voice 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

const state = reactive({ ...INITIAL_STATE });

export function useTranscriptionsStore() {
  const transcriptions = computed(() => {
    return state.transcriptions.map((transcription) => {
      return new TranscriptionReadModel(transcription);
    });
  });

  return {
    transcriptions,
  };
}
