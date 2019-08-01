/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  STATE,
  LOAD_TRANSCRIPTIONS,
  LOAD_TRANSCRIPTIONS_SUCCESS,
  LOAD_TRANSCRIPTIONS_ERROR,
  SAVE_TRANSCRIPTIONS,
  SAVE_TRANSCRIPTIONS_SUCCESS,
  SAVE_TRANSCRIPTIONS_ERROR,
  CREATE_TRANSCRIPTION,
  DELETE_TRANSCRIPTION,
  UPDATE_TRANSCRIPTION,
} from './constants';

// The initial state of the App
export const initialState = {
  state: STATE.initial,
  error: false,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TRANSCRIPTIONS:
        draft.state = STATE.loading;
        draft.data = [];
        draft.error = false;
        break;

      case LOAD_TRANSCRIPTIONS_SUCCESS:
        draft.state = STATE.loaded;
        draft.data = action.transcriptions;
        break;

      case SAVE_TRANSCRIPTIONS:
        draft.state = STATE.saving;
        draft.error = false;
        break;

      case SAVE_TRANSCRIPTIONS_SUCCESS:
        draft.state = STATE.saved;
        break;

      case SAVE_TRANSCRIPTIONS_ERROR:
      case LOAD_TRANSCRIPTIONS_ERROR:
        draft.error = action.error;
        draft.state = STATE.error;
        break;

      case CREATE_TRANSCRIPTION:
        draft.data = [...state.data, action.transcription];
        break;

      case UPDATE_TRANSCRIPTION:
        draft.data = state.data.map(item => {
          if (item.id === action.transcription.id) {
            return { ...item, ...action.transcription };
          }
          return item;
        });
        break;

      case DELETE_TRANSCRIPTION:
        draft.data = state.data.filter(item => item.id !== action.id);
        break;
    }
  });

export default appReducer;
