import { describe, it, expect } from 'vitest';
import { DOMWrapper, mount } from '@vue/test-utils';
import SingleTranscription from '../SingleTranscription.vue';
import type { Transcription } from '@/app/models/transcription';
import { generateGlobals } from '@/app/helpers/testHelpers';

const ID = 1;
const VOICE_LABEL = 'Voice 1';
const TEXT = 'Test transcription';

const mockTranscription: Transcription = {
  id: ID,
  voice: VOICE_LABEL,
  text: TEXT
};

/**
 * Single Transaction test
 * 
 * Current test will:
 *  - Mount the component
 *  - Check if information displayed is correct
 *  - Check if checkbox toggle works properly
 */
describe('Single transcription', () => {
  const wrapper = mount(SingleTranscription, {
    global: generateGlobals(),
    props: { transcription: mockTranscription }
  });

  it('displays correct information', () => {
    const input = wrapper.find('input[type="text"]') as DOMWrapper<HTMLInputElement>;
    const textarea = wrapper.find('textarea');
    expect(textarea.element.value).toBe(TEXT);
    expect(input.element.value).toBe(VOICE_LABEL);
  });

  it('toggles correctly', () => {
    const checkbox = wrapper.find('input[type="checkbox"]') as DOMWrapper<HTMLInputElement>;
    checkbox.element.click();
    expect(checkbox.element.value).toBe('on');
  });
});
