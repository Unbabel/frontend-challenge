/**
 *
 * Asynchronously loads the component for Toast
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
