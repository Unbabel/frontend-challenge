/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectState = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.state,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectTranscriptions = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data,
  );

export { selectGlobal, makeSelectState, makeSelectError, makeSelectTranscriptions };
