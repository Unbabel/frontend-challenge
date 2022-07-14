import { TranscriptionResponse, TranscriptionList } from "@/types";

type TranscriptionsAPI = {
  fetch(): Promise<TranscriptionResponse>;
  update(data: TranscriptionList): Promise<TranscriptionResponse>;
};

const apiUriGet = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

const apiUriPost =
  "http://run.mocky.io/v3/24f168c4-4727-4c35-b673-da060574f0ab";

const defaultHeaders = {
  "Content-Type": "application/json; charset=UTF-8",
  Accept: "application/json",
  Origin: "http://localhost:8080",
  "Access-Control-Allow-Origin": "*",
};
// TODO: mock the response of the post, to the same submitted content
const mockUpdate = true;

export const transcriptionsAPI: TranscriptionsAPI = {
  fetch: async (): Promise<TranscriptionList> => {
    return fetch(apiUriGet, {
      method: "GET",
      headers: defaultHeaders,
    })
      .then(async (response) => response.json())
      .catch((err) => Promise.reject(err));
  },

  update: async (data: TranscriptionList): Promise<TranscriptionList> => {
    return fetch(apiUriPost, {
      method: "GET",
      mode: "cors",
      headers: defaultHeaders,
      // body: JSON.stringify(data),
    })
      .then(async (response) =>
        mockUpdate ? Promise.resolve(data) : response.json()
      )
      .catch((err) => Promise.reject(err));
  },
};
