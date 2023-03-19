import { createTranscriptionModule } from '../store/transcriptionModule';

/**
 * Default request wait timeout
 */
export const REQUEST_TIMEOUT = 1500;

/**
 * Default test globals to use on component mount
 */
export function generateGlobals() {
  const store = createTranscriptionModule();
  return { plugins: [store] };
}
