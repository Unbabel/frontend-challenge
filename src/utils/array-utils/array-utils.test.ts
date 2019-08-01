
import * as arrayUtils from './array-utils';
import { ITranscription } from '@/store/types';

describe('Test array utils', () => {
  const expectedOutput: ITranscription[] = [
    {
      id: 1,
      text: 'This is a one line sentence made to show how it fits',
      voice: 'Voice 2'
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      voice: 'Voice 1'
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      voice: 'Voice 1'
    },
    { id: 4, voice: 'test 4', text: 'test text' }
  ];

  const originalArray: ITranscription[] = [
    {
      id: 1,
      text: 'This is a one line sentence made to show how it fits',
      voice: 'Voice 2'
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      voice: 'Voice 1'
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      voice: 'Voice 1'
    },
    { id: 4, voice: 'test 4', text: 'test text' }
  ];

  const updatingArray: ITranscription[] = [
    {
      id: 1,
      text: 'This is a one line sentence made to show how it fits',
      voice: 'Voice 2'
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      voice: 'Voice 1'
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      voice: 'Voice 1'
    }
  ];

  const invalidArray: ITranscription[] = [
    {
      id: 1,
      text: 'This is a one line sentence made to show how it fits',
      voice: 'Voice 2'
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      voice: 'Voice 1'
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      voice: ''
    }
  ];

  test('merge arrays', () => {
    expect(arrayUtils.mergeArrays(originalArray, updatingArray)).toStrictEqual(
      expectedOutput
    );
  });

  test('array is valid', () => {
    expect(arrayUtils.listHasInvalidFields(updatingArray)).toBe(false);
    expect(arrayUtils.listHasInvalidFields(invalidArray)).toBe(true);
  });
});
