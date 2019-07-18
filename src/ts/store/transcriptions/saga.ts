import { all, put, takeEvery } from "redux-saga/effects";
import { getTranscriptionList } from "../../common/requests/requests";
import { run } from "../../utils/promise-utils/promise-utils";
import { GET_TRANSCRIPTION_LIST, SET_LIST_ON_STATE } from "./actions";

export function* loadTranscriptionsList() {
  const response = yield run(getTranscriptionList());

  yield put(
    SET_LIST_ON_STATE({
      transcriptionList: response
    })
  );
}

export function* transcriptionsSaga(): any {
  yield all([takeEvery(GET_TRANSCRIPTION_LIST.type, loadTranscriptionsList)]);
}
