/**
 * Gets the repositories of the user from Github
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
    yield put(transcriptionsSaved(action.transcriptions));
  } catch (err) {
    yield put(transcriptionsSavingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homepageData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TRANSCRIPTIONS, getData);
  yield takeLatest(SAVE_TRANSCRIPTIONS, saveData);
}
