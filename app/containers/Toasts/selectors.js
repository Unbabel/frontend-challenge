import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the toasts state domain
 */

const selectToastsDomain = state => state.toasts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Toasts
 */

const makeSelectToasts = () =>
  createSelector(
    selectToastsDomain,
    substate => substate,
  );

export default makeSelectToasts;
export { selectToastsDomain };
