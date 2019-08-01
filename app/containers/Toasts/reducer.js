/*
 *
 * Toasts reducer
 *
 */
import produce from 'immer';
import { SHOW_TOAST, HIDE_TOAST } from './constants';

export const initialState = {
  toasts: [],
};

/* eslint-disable default-case, no-param-reassign */
const toastsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_TOAST:
        draft.toasts = [...state.toasts, action.toast];
        break;
      case HIDE_TOAST:
        draft.toasts = state.toasts.filter(toast => toast.timestamp !== action.toast.timestamp);
        break;
    }
  });

export default toastsReducer;
