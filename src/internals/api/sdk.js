import axios from  "@/internals/config/axios";

import { API } from "@/internals/settings";

export default {
  transcriptions: {
    load: async () => {
      return await axios.get(API.ENDPOINTS.transcriptions);
    },
    save: async transcriptions => {
      return await axios.post(API.ENDPOINTS.transcriptions, transcriptions);
    }
  }
};
