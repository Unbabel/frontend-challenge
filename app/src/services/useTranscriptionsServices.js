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

export function useTranscriptionsServices() {
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

  const createTranscriptions = async (transcriptions) => {
    let data, error;
    try {
      const response = await api.transcriptions.create(transcriptions);
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
