import Axios from "axios";

import { API } from "@/internals/settings";

const axios = Axios.create({
  baseURL: API.HOST,
  headers: { "Content-Type": "application/json" },
  timeout: 1000,
});

export default axios;
