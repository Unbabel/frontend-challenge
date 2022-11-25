import { IData } from "./Data.model";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const api = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

const headers = {
  Accept: "application/json",
};

export const getData = () =>
  fetch(`${api}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const postData = (data: IData[]) =>
  fetch(`${api}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((data) => data);