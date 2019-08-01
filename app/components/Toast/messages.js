/*
 * Toast Messages
 *
 * This contains all the text for the Toast component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Toast';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Toast component!',
  },
});
