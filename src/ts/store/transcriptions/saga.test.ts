import { put } from "redux-saga/effects";
import { ITranscription } from "../../types/types";
import { DELETE_DATA, SET_LIST_ON_STATE } from "./actions";
import { deleteData } from "./saga";

describe("Test Transcription saga", () => {
  const transcription: ITranscription = {
    id: new Date().getUTCMilliseconds(),
    text: "",
    voice: ""
  };

  test('dispatch action "DELETE_DATA"', () => {
    const generator = deleteData(DELETE_DATA({ transcription }));
    generator.next();

    expect(generator.next(transcription).value).toEqual(
      put(
        SET_LIST_ON_STATE({
          transcriptionList: []
        })
      )
    );
    expect(generator.next().done).toBeTruthy();
  });


});
