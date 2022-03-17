import fetchMock from "fetch-mock";
import { API } from "../api";
import { CONSTANTS } from "../constants";
import { List } from "@/store/types";

const DATA: List = [
  { id: 1, text: "test", voice: "test" },
  { id: 2, text: "test 2", voice: "test 2" },
];

fetchMock.mock(CONSTANTS.API.GET_LIST, { body: DATA });

describe("API", () => {
  test("Fetch data from an external resource", async () => {
    const result = await API.getData();

    expect(result).toEqual(DATA);
  });

  test("Post data to an external resource", async () => {
    const result = await API.sendData(DATA);

    expect(result).toEqual(DATA);
  });
});
