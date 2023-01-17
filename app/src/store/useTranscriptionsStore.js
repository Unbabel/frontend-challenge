/**
 * TRANSCRIPITIONS RESOURCE STORE
 * Hope you don't mind not using VueX. My time restrictions demanded for a more pragmatic a simpler approach.
 */
import { computed, reactive } from "vue";
import TranscriptionReadModel from "@/models/TranscriptionReadModel";

import { useTranscriptionsServices } from "@/services/useTranscriptionsServices";

const INITIAL_STATE = {
  transcriptions: [],
};

/**
 * Store state.
 */
const state = reactive({ ...INITIAL_STATE });

export function useTranscriptionsStore() {
  /**
   * Gets index of transcription having the given id
   * @param {Number} id
   */
  const getIndexOfTranscriptionById = (id) => {
    return state.transcriptions.findIndex((transcription) => {
      return transcription.id === id;
    });
  };

  /**
   * Getter for transcriptions. It parses to read model.
   */
  const transcriptions = computed(() => {
    return state.transcriptions.map((transcription) => {
      return new TranscriptionReadModel(transcription);
    });
  });

  /**
   * Toggle selection of transcription with the given id.
   * @param {Number} id
   */
  const toggleTranscriptionSelectionOfId = (id) => {
    const index = getIndexOfTranscriptionById(id);
    if (index < 0) return;

    const transcription = { ...state.transcriptions[index] };
    transcription.selected = !transcription.selected;
    state.transcriptions.splice(index, 1, {
      ...transcription,
    });
  };

  /**
   * Removes transcription with the given id.
   * @param {Number} id
   */
  const deleteTranscriptionOfId = (id) => {
    const index = getIndexOfTranscriptionById(id);
    if (index < 0) return;
    state.transcriptions.splice(index, 1);
  };

  const { fetchTranscriptions, createTranscriptions } =
    useTranscriptionsServices();
  /**
   * Action to get all transcriptions from api and store them.
   */
  const getTranscriptions = async () => {
    const [error, transcriptions] = await fetchTranscriptions();
    if (error) return; // ideally throws or displays notification
    state.transcriptions = [...transcriptions];
  };

  /**
   * Action to send newly created transcriptions from the api.
   * @param {Array} transcriptions
   */
  const saveTranscriptions = async (transcriptions) => {
    const [error] = await createTranscriptions(transcriptions);
    if (error) () => {}; // do something if error is thrown;
  };

  return {
    transcriptions,
    toggleTranscriptionSelectionOfId,
    deleteTranscriptionOfId,
    getTranscriptions,
    saveTranscriptions,
  };
}
