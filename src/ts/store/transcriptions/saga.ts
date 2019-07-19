import { all, put, select, takeEvery } from "redux-saga/effects";
import {
  getTranscriptionList,
  uploadTranscriptionList
} from "../../common/requests/requests";
import { run } from "../../utils/promise-utils/promise-utils";
import { IAppState } from "../store";
import {
  GET_TRANSCRIPTION_LIST,
  ON_ROW_EDIT,
  SET_LIST_ON_STATE,
  UPLOAD_DATA
} from "./actions";

function* loadTranscriptionsList() {
  const appState = (yield select()) as IAppState;
  const response = yield run(getTranscriptionList());

  yield put(
    SET_LIST_ON_STATE({
      transcriptionList:
        appState.transcriptionsState.list &&
        appState.transcriptionsState.list.length
          ? [...response, ...appState.transcriptionsState.list]
          : response
    })
  );
}

function* editRow(a: typeof ON_ROW_EDIT.typeInterface) {
  const appState = (yield select()) as IAppState;
  const transcriptionList = appState.transcriptionsState.list;
  const rowToEdit = transcriptionList.find(
    transcription => transcription.id === a.rowId
  );

  rowToEdit[a.field] = a.newValue;

  yield put(
    SET_LIST_ON_STATE({
      transcriptionList
    })
  );
}

function* uploadData(a: typeof UPLOAD_DATA.typeInterface) {
  const appState = (yield select()) as IAppState;

  return uploadTranscriptionList(appState.transcriptionsState.list);
}

export function* transcriptionsSaga(): any {
  yield all([
    takeEvery(GET_TRANSCRIPTION_LIST.type, loadTranscriptionsList),
    takeEvery(ON_ROW_EDIT.type, editRow),
    takeEvery(UPLOAD_DATA.type, uploadData)
  ]);
}
