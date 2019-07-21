import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ITranscription } from "../../types/types";
import { run } from "../../utils/promise-utils/promise-utils";
import * as requests from "./requests";

describe("Test the apps requests", () => {
  const url = "https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

  const responseMock: ITranscription[] = [
    {
      id: 1,
      text: "This is a one line sentence made to show how it fits",
      voice: "Voice 2"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      voice: "Voice 1"
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      voice: "Voice 1"
    }
  ];

  test("Mocking the HTTP call to GET the list of transcriptions", () => {
    const mock = new MockAdapter(axios);
    const data = responseMock;

    mock.onGet(url).reply(200, data);

    run(requests.getTranscriptionList())
      .then(response => {
        expect(response).toStrictEqual(data);
      })
      .catch(error => {
        console.error(error);
      });
  });

  test("Mocking the HTTP call to POST the list of transcriptions", () => {
    const mock = new MockAdapter(axios);
    const mockedData = responseMock;

    mock.onPost(url, mockedData).reply(200, mockedData);

    run(requests.uploadTranscriptionList(mockedData))
      .then(response => {
        const { data } = response;
        expect(data).toStrictEqual(data);
      })
      .catch(error => {
        console.error(error);
      });
  });
});
