/**
 * TRANSCRIPTIONS API REPO
 */
import HttpClient from "../infrastructure/http-client";

const BASE_URL = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

export default {
  all: () => HttpClient.get(`${BASE_URL}`),
  create: (payload) => HttpClient.post(`${BASE_URL}`, payload),
  update: (id, payload) => HttpClient.put(`${BASE_URL}/${id}`, payload),
  delete: (id) => HttpClient.delete(`${BASE_URL}/${id}`),
};
