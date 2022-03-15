import { CONSTANTS } from "./constants";
import { ApiDataResult, List } from "@/store/types";

type Api = {
  getData(): Promise<ApiDataResult>;
  sendData(body: List): Promise<ApiDataResult>;
};

export const API: Api = {
  getData: async (): Promise<ApiDataResult> => {
    return await fetch(CONSTANTS.API.GET_LIST).then((response) =>
      response.json()
    );
  },

  sendData: async (body: List): Promise<ApiDataResult> => {
    return await fetch(CONSTANTS.API.POST_LIST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  },
};
