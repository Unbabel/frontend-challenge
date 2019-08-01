/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: '404',
  },
  notFoundMessage: {
    id: `${scope}.notFoundMessage`,
    defaultMessage: 'Nothing to see here. Move along!',
  },
});
