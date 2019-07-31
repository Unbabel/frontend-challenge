/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_TRANSCRIPTIONS, LOAD_TRANSCRIPTIONS_SUCCESS, LOAD_TRANSCRIPTIONS_ERROR } from './constants';

/**
 * Load the transcriptions, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadTranscriptions() {
  return {
    type: LOAD_TRANSCRIPTIONS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} transcriptions The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function transcriptionsLoaded(transcriptions) {
  return {
    type: LOAD_TRANSCRIPTIONS_SUCCESS,
    transcriptions,
  };
}

/**
 * Dispatched when loading the transcriptions fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function transcriptionsLoadingError(error) {
  return {
    type: LOAD_TRANSCRIPTIONS_ERROR,
    error,
  };
}
