/**
 * Loads and Saves the transcriptions
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TRANSCRIPTIONS, SAVE_TRANSCRIPTIONS } from 'containers/App/constants';
import {
  transcriptionsLoaded,
  transcriptionsLoadingError,
  transcriptionsSavingError,
  transcriptionsSaved,
} from 'containers/App/actions';

import { loadTranscriptions, saveTranscriptions } from 'utils/sdk';

export function* getData() {
  try {
    const transcriptions = yield call(loadTranscriptions);
    yield put(transcriptionsLoaded(transcriptions));
  } catch (err) {
    yield put(transcriptionsLoadingError(err));
  }
}

export function* saveData(action) {
  try {
    yield call(saveTranscriptions, action.transcriptions);
    yield put(transcriptionsSaved());
  } catch (err) {
    yield put(transcriptionsSavingError(err));
  }
}

export default function* homepageData() {
  yield takeLatest(LOAD_TRANSCRIPTIONS, getData);
  yield takeLatest(SAVE_TRANSCRIPTIONS, saveData);
}
