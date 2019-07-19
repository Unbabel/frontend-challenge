import { Action } from "redux";
import { ADD_NEW_ROW, SET_LIST_ON_STATE } from "./actions";
import { initialTranscriptionListState, ITranscriptionsState } from "./state";

export function transcriptionsReducer(
  state: ITranscriptionsState = initialTranscriptionListState,
  action: Action
): ITranscriptionsState {
  if (SET_LIST_ON_STATE.is(action)) {
    return {
      ...state,
      list: action.transcriptionList
    };
  }

  if (ADD_NEW_ROW.is(action)) {
    return {
      ...state,
      list: state.list ? [...state.list, action.newRow] : [action.newRow]
    };
  }
  return state;
}
