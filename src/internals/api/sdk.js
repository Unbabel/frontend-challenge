import axios from  "@/internals/config/axios";

import { API } from "@/internals/settings";

export default {
  transcriptions: {
    load: async () => {
      return await axios.get(API.ENDPOINTS.transcriptions);
    },
    save: async transcriptions => {
      console.log('SDK :: save() :', API.ENDPOINTS.transcriptions, transcriptions);
      return await axios.post(API.ENDPOINTS.transcriptions, transcriptions);
    }
  }
};
