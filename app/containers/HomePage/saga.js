/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TRANSCRIPTIONS } from 'containers/App/constants';
import { transcriptionsLoaded, transcriptionsLoadingError } from 'containers/App/actions';

import { loadTranscriptions } from 'utils/sdk';

export function* getRepos() {
  try {
    const transcriptions = yield call(loadTranscriptions);
    yield put(transcriptionsLoaded(transcriptions));
  } catch (err) {
    yield put(transcriptionsLoadingError(err));
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
  yield takeLatest(LOAD_TRANSCRIPTIONS, getRepos);
}
