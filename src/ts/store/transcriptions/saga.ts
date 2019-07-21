import { all, put, select, takeEvery } from "redux-saga/effects";
import {
  getTranscriptionList,
  uploadTranscriptionList
} from "../../common/requests/requests";
import { mergeArrays } from "../../utils/array-utils/array-utils";
import { run } from "../../utils/promise-utils/promise-utils";
import { IAppState } from "../store";
import {
  DELETE_DATA,
  GET_TRANSCRIPTION_LIST,
  ON_ROW_EDIT,
  SET_LIST_ON_STATE,
  UPLOAD_DATA
} from "./actions";

export function* loadTranscriptionsList() {
  const appState = (yield select()) as IAppState;
  const response = yield run(getTranscriptionList());
  const transcriptionList =
    (appState &&
      appState.transcriptionsState &&
      appState.transcriptionsState.list) ||
    [];

  yield put(
    SET_LIST_ON_STATE({
      loadingList: false,
      transcriptionList:
        transcriptionList && transcriptionList.length
          ? mergeArrays(transcriptionList, response)
          : response || [],
      uploading: false
    })
  );
}

export function* editRow(a: typeof ON_ROW_EDIT.typeInterface) {
  const appState = (yield select()) as IAppState;
  const transcriptionList =
    (appState.transcriptionsState && appState.transcriptionsState.list) || [];
  const rowToEdit = transcriptionList.find(
    transcription => transcription.id === a.rowId
  );

  if (transcriptionList.length) {
    rowToEdit[a.field] = a.newValue;

    yield put(
      SET_LIST_ON_STATE({
        transcriptionList
      })
    );
  }

  yield put(
    SET_LIST_ON_STATE({
      transcriptionList
    })
  );
}

export function* uploadData() {
  const appState = (yield select()) as IAppState;
  const transcriptionList =
    (appState &&
      appState.transcriptionsState &&
      appState.transcriptionsState.list) ||
    [];

  yield run(uploadTranscriptionList(transcriptionList));

  yield put(
    SET_LIST_ON_STATE({
      transcriptionList,
      uploading: false
    })
  );
}

export function* deleteData(a: typeof DELETE_DATA.typeInterface) {
  const appState = (yield select()) as IAppState;
  const transcriptionList =
    (appState.transcriptionsState && appState.transcriptionsState.list) || [];
  const rowToDeleteIndex = transcriptionList.indexOf(a.transcription);

  if (rowToDeleteIndex > -1) {
    transcriptionList.splice(rowToDeleteIndex, 1);

    yield put(
      SET_LIST_ON_STATE({
        transcriptionList
      })
    );
  }

  yield put(
    SET_LIST_ON_STATE({
      transcriptionList
    })
  );
}

export function* transcriptionsSaga(): any {
  yield all([
    takeEvery(GET_TRANSCRIPTION_LIST.type, loadTranscriptionsList),
    takeEvery(ON_ROW_EDIT.type, editRow),
    takeEvery(UPLOAD_DATA.type, uploadData),
    takeEvery(DELETE_DATA.type, deleteData)
  ]);
}
