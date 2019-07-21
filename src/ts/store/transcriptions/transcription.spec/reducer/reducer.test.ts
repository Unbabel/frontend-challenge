import { ITranscription } from "../../../../types/types";
import {
  ADD_NEW_ROW,
  GET_TRANSCRIPTION_LIST,
  SET_LIST_ON_STATE,
  UPLOAD_DATA
} from "../../actions";
import { transcriptionsReducer } from "../../reducer";
import { ITranscriptionsState } from "../../state";

describe("Test Transcription reducer", () => {
  const initialState: ITranscriptionsState = {
    list: undefined,
    loadingList: false,
    uploading: false
  };

  const newTranscritpion: ITranscription = {
    id: 4,
    text: "",
    voice: ""
  };

  let expectedState: ITranscriptionsState;
  let action: any;

  beforeEach(() => {
    expectedState = initialState;
  });

  test("Should return initial state", () => {
    expect(transcriptionsReducer(undefined, null)).toStrictEqual(initialState);
  });

  test("Should handle SET_LIST_ON_STATE", () => {
    action = SET_LIST_ON_STATE({
      loadingList: false,
      transcriptionList: [newTranscritpion],
      uploading: false
    });

    const state: ITranscriptionsState = {
      list: [newTranscritpion],
      loadingList: false,
      uploading: false
    };

    expect(transcriptionsReducer(initialState, action)).toEqual(state);
  });

  test("Should handle ADD_NEW_ROW", () => {
    action = ADD_NEW_ROW({ newRow: newTranscritpion });

    const state: ITranscriptionsState = {
      list: [newTranscritpion],
      loadingList: false,
      uploading: false
    };

    expect(transcriptionsReducer(initialState, action)).toStrictEqual(
      state
    );
  });

  test("Should handle GET_TRANSCRIPTION_LIST", () => {
    action = GET_TRANSCRIPTION_LIST({});

    expectedState.loadingList = true;

    expect(transcriptionsReducer(initialState, action)).toEqual(expectedState);
  });

  test("Should handle UPLOAD_DATA", () => {
    action = UPLOAD_DATA({});

    expectedState.uploading = true;

    expect(transcriptionsReducer(initialState, action)).toEqual(expectedState);
  });
});
