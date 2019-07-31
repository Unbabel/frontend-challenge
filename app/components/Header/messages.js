/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'components.Header';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'transcriptions',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
});
