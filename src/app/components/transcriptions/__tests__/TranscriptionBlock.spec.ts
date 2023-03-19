import { describe, it, expect, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
import TranscriptionBlock from '../TranscriptionBlock.vue';
import { REQUEST_TIMEOUT, generateGlobals } from '@/app/helpers/testHelpers';

/**
 * Multiple Transaction test
 *
 * Current test will:
 *  - Mount the component
 *  - Wait for the requests to finish
 *  - Check if data length is the expected
 *  - Remove data entry and re-check data size
 */
describe('Multiple transcriptions', () => {
  const wrapper = mount(TranscriptionBlock, { global: generateGlobals() });

  beforeAll(async () => new Promise((r) => setTimeout(r, REQUEST_TIMEOUT)));

  it('displays transcriptions', () => {
    const transcriptionList = wrapper.findAll('.transcription');
    expect(transcriptionList).toHaveLength(3);
  });

  it('deletes correctly', async () => {
    const deleteBtn = wrapper.find('.trash-icon');
    await deleteBtn.trigger('click');
    const transcriptionList = wrapper.findAll('.transcription');
    expect(transcriptionList).toHaveLength(2);
  });
});
