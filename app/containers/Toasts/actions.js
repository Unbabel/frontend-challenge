/*
 *
 * Toasts actions
 *
 */

import { SHOW_TOAST, HIDE_TOAST } from './constants';

export function showToast(message, type) {
  return {
    type: SHOW_TOAST,
    toast: {
      timestamp: Date.now(),
      message,
      type,
    },
  };
}

export function hideToast(toast) {
  return {
    type: HIDE_TOAST,
    toast,
  };
}
