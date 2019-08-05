import axios from "axios";

import { API } from "@/internals/settings";

const getPath = path => {
  return `${API.host}${path}`;
};

const endpoints = {
  transcriptios: getPath(API.endpoints.transcriptions)
};

export default {
  transcriptios: {
    load: async () => {
      return axios.get(endpoints.transcriptios);
    },
    save: async transcriptions => {
      return axios.post(endpoints.transcriptios, transcriptions);
    }
  }
};
