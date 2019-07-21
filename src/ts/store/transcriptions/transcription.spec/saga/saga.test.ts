import { put } from "redux-saga/effects";
import { ITranscription } from "../../../../types/types";
import { DELETE_DATA, ON_ROW_EDIT, SET_LIST_ON_STATE } from "../../actions";
import {
  deleteData,
  editRow,
  loadTranscriptionsList,
  uploadData
} from "../../saga";

describe("Test Transcription saga", () => {
  const transcription: ITranscription = {
    id: 1,
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

  test("dispatch action GET_TRANSCRIPTION_LIST", () => {
    const generator = loadTranscriptionsList();

    generator.next();
    generator.next();

    expect(generator.next().value).toEqual(
      put(
        SET_LIST_ON_STATE({
          loadingList: false,
          transcriptionList: [],
          uploading: false
        })
      )
    );
    expect(generator.next().done).toBeTruthy();
  });

  test("dispatch action ON_ROW_EDIT", () => {
    const mockResponse = transcription;
    const generator = editRow(
      ON_ROW_EDIT({ field: "voice", newValue: "test", rowId: 1 })
    );
    generator.next();

    expect(generator.next([mockResponse]).value).toEqual(
      put(
        SET_LIST_ON_STATE({
          transcriptionList: []
        })
      )
    );
    expect(generator.next().done).toBeTruthy();
  });

  test("dispatch action UPLOAD_DATA", () => {
    const generator = uploadData();

    generator.next();
    generator.next();

    expect(generator.next().value).toEqual(
      put(
        SET_LIST_ON_STATE({
          transcriptionList: [],
          uploading: false
        })
      )
    );
    expect(generator.next().done).toBeTruthy();
  });
});
