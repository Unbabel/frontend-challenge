import axios from "axios";

import { API } from "@/internals/settings";

export default {
  transcriptios: {
    load: async () => {
      console.log('SDK :: load() :', API.ENDPOINTS.transcriptions);
      return await axios.get(API.ENDPOINTS.transcriptions);
    },
    save: async transcriptions => {
      console.log('SDK :: save() :', API.ENDPOINTS.transcriptions, transcriptions);
      return await axios.post(API.ENDPOINTS.transcriptions, transcriptions);
    }
  }
};
