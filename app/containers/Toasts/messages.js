/*
 * Toasts Messages
 *
 * This contains all the text for the Toasts container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Toasts';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Toasts container!',
  },
});
