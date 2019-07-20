import { Action } from "redux";
import {
  ADD_NEW_ROW,
  GET_TRANSCRIPTION_LIST,
  SET_LIST_ON_STATE,
  UPLOAD_DATA
} from "./actions";
import { initialTranscriptionListState, ITranscriptionsState } from "./state";

export function transcriptionsReducer(
  state: ITranscriptionsState = initialTranscriptionListState,
  action: Action
): ITranscriptionsState {
  if (SET_LIST_ON_STATE.is(action)) {
    return {
      ...state,
      list: action.transcriptionList,
      loadingList: action.loadingList,
      uploading: action.uploading
    };
  }

  if (ADD_NEW_ROW.is(action)) {
    return {
      ...state,
      list: state.list ? [...state.list, action.newRow] : [action.newRow]
    };
  }

  if (GET_TRANSCRIPTION_LIST.is(action)) {
    return {
      ...state,
      list: state.list ? state.list : undefined,
      loadingList: true
    };
  }

  if (UPLOAD_DATA.is(action)) {
    return {
      ...state,
      list: state.list ? state.list : undefined,
      uploading: true
    };
  }

  return state;
}
