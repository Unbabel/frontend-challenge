/*
 * TextInput Messages
 *
 * This contains all the text for the TextInput component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TextInput';

export default defineMessages({
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Name',
  },
});
