import { HTTP } from "@/services/axios";

/**
 * @returns {object}
 */
const fetchTranscriptions = async () => {
  return await HTTP.get("/v2/5ae1c5792d00004d009d7e5c");
};

/**
 * @param   {object} payload
 * @param   {number} payload.id
 * @param   {string} payload.voice
 * @param   {string} payload.text
 *
 * @returns {object}
 */
const uploadTranscription = async (transcriptions) => {
  const response = await HTTP.post("/v2/5ae1c5792d00004d009d7e5c", transcriptions);

  return response.data;
};

export default {
  fetchTranscriptions,
  uploadTranscription,
};
