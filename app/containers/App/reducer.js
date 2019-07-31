/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { STATE, LOAD_TRANSCRIPTIONS, LOAD_TRANSCRIPTIONS_SUCCESS, LOAD_TRANSCRIPTIONS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  state: STATE.initial,
  error: false,
  data: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TRANSCRIPTIONS:
        draft.state = STATE.loading;
        draft.data = false;
        draft.error = false;
        break;

      case LOAD_TRANSCRIPTIONS_SUCCESS:
        draft.state = STATE.loaded;
        draft.data = action.transcriptions;
        break;

      case LOAD_TRANSCRIPTIONS_ERROR:
        draft.error = action.error;
        draft.state = STATE.error;
        break;
    }
  });

export default appReducer;
