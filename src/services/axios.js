// https://axios-http.com/docs/intro
import axios from "axios";

export const HTTP = axios.create({
  baseURL: 'http://www.mocky.io',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
