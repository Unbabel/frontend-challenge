import axios from "@/internals/config/axios";

import { API } from "@/internals/settings";

export default {
  transcriptions: {
    load: async () => {
      if (Math.random() > 0.16) {
        return await axios.get(API.ENDPOINTS.transcriptions);
      }
    },
    save: async transcriptions => {
      if (Math.random() > 0.16) {
        return await axios.post(API.ENDPOINTS.transcriptions, transcriptions);
      }
    }
  }
};
