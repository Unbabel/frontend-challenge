/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_TRANSCRIPTIONS = 'App/LOAD_TRANSCRIPTIONS';
export const LOAD_TRANSCRIPTIONS_SUCCESS = 'App/LOAD_TRANSCRIPTIONS_SUCCESS';
export const LOAD_TRANSCRIPTIONS_ERROR = 'App/LOAD_TRANSCRIPTIONS_ERROR';

export const SAVE_TRANSCRIPTIONS = 'App/SAVE_TRANSCRIPTIONS';
export const SAVE_TRANSCRIPTIONS_SUCCESS = 'App/SAVE_TRANSCRIPTIONS_SUCCESS';
export const SAVE_TRANSCRIPTIONS_ERROR = 'App/SAVE_TRANSCRIPTIONS_ERROR';

export const CREATE_TRANSCRIPTION = 'TranscriptionListItem/CREATE_TRANSCRIPTION';
export const UPDATE_TRANSCRIPTION = 'TranscriptionListItem/UPDATE_TRANSCRIPTION';
export const DELETE_TRANSCRIPTION = 'TranscriptionListItem/DELETE_TRANSCRIPTION';

export const STATE = {
  initial: 'initial',
  error: 'error',
  loading: 'loading',
  loaded: 'loaded',
  saving: 'saving',
  saved: 'saved',
};
