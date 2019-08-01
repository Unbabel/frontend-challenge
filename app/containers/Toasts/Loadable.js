/**
 *
 * Asynchronously loads the component for Toasts
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
