/*
 * TranscriptionList Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TranscriptionList';

export default defineMessages({
  loaded: {
    id: `${scope}.loaded`,
    defaultMessage: 'Transcriptions loaded',
  },
  saved: {
    id: `${scope}.saved`,
    defaultMessage: 'Transcriptions saved',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Something went wrong. Try again!',
  },
});
