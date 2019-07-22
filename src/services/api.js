import axios from "axios";

export async function postTranscriptions(transcriptions) {
  return axios.post(
    "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c",
    { data: transcriptions }
  );
}

export async function fetchTranscriptions() {
  return   axios.get(
    "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c"
  );
  return response.data;
}
