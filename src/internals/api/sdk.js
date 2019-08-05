import axios from "axios";

import { api } from "@/internals/settings";

const getPath = path => {
  return `${api.host}${path}`;
};

const endpoints = {
  transcriptios: getPath(api.endpoints.transcriptions)
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
