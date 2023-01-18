import api from "@pn/api";
/**
 * Api parser function. If Api changes, only these values need to be changed.
 * @param {*} apiTranscription
 */
const fromApi = (apiTranscription) => ({
  id: apiTranscription.id,
  voice: apiTranscription.voice,
  text: apiTranscription.text,
});

const toApi = (appTranscription) => ({
  id: appTranscription.id,
  voice: appTranscription.voice,
  text: appTranscription.text,
});

export function useTranscriptionsServices() {
  /**
   * Service function to fetch all transcriptions from Api.
   */
  const fetchTranscriptions = async () => {
    let data, error;
    try {
      const response = await api.transcriptions.all();
      data = response.map((apiTranscription) => fromApi(apiTranscription));
    } catch (e) {
      error = e;
    }
    return [error, data];
  };

  /**
   * Service function to save transcriptions to the Api.
   * @param {Array} transcriptions
   */
  const createTranscriptions = async (transcriptions) => {
    let data, error;
    try {
      const serialized = transcriptions.map((appTranscription) =>
        toApi(appTranscription)
      );
      const response = await api.transcriptions.create(serialized);
      data = response;
    } catch (e) {
      error = e;
    }
    return [error, data];
  };

  return {
    fetchTranscriptions,
    createTranscriptions,
  };
}
