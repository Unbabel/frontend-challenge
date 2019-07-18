import { Action } from "redux";
import { SET_LIST_ON_STATE } from "./actions";
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
  return state;
}
