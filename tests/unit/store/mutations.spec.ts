import { mutations } from '../../../src/store/mutations/transcription-mutations';
import {
  ITranscriptionState,
  ITranscription,
  IChangeObject
} from '@/store/types';

describe('', () => {
  const transcriptionListMock: ITranscription[] = [
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

  let transcriptionsMutations: any;
  let state: ITranscriptionState;

  beforeEach(() => {
    transcriptionsMutations = mutations;
    state = {
      transcriptionList: [],
      errors: []
    };
  });

  test('Has transcription list loaded', () => {
    mutations.transcriptionListLoaded(state, transcriptionListMock);

    expect(state.transcriptionList).toHaveLength(3);
    expect(state.transcriptionList).toStrictEqual(transcriptionListMock);
  });

  test('List has not loaded', () => {
    mutations.transcriptionListLoaded(state, []);

    expect(state.transcriptionList).toHaveLength(0);
  });

  test('Server responded with error to list load', () => {
    const errorMessage =
      'An error occurred while getting transcriptions from the server';

    mutations.transcriptionListError(state);

    expect(state.errors).toHaveLength(1);
    expect(state.errors.includes(errorMessage)).toBe(true);
  });

  test('Adding a transcription and adding it once again to test errors', () => {
    mutations.addTranscription(state);

    expect(state.transcriptionList).toHaveLength(1);

    mutations.addTranscription(state);

    expect(state.errors).toHaveLength(1);
  });

  test('Editing a transcription voice', () => {
    const changeObjectMock: IChangeObject = {
      id: 1,
      field: 'voice',
      newValue: 'Test Value'
    };

    const mockTranscription: ITranscription = {
      id: 1,
      text: '',
      voice: 'Test'
    };

    state.transcriptionList.push(mockTranscription);

    mutations.editTranscription(state, changeObjectMock);

    expect(state.transcriptionList[0].voice).toBe(changeObjectMock.newValue);
  });

  test('Editing a transcription text', () => {
    const changeObjectMock: IChangeObject = {
      id: 1,
      field: 'text',
      newValue: 'Test Value'
    };

    const mockTranscription: ITranscription = {
      id: 1,
      text: '',
      voice: 'Test'
    };

    state.transcriptionList.push(mockTranscription);

    mutations.editTranscription(state, changeObjectMock);

    expect(state.transcriptionList[0].text).toBe(changeObjectMock.newValue);
  });

  test('Editing throws error when executed with no new value', () => {
    const changeObjectMock: IChangeObject = {
      id: 1,
      field: 'text',
      newValue: ''
    };

    const errorMessage = `The ${changeObjectMock.field} field is invalid`;

    mutations.editTranscription(state, changeObjectMock);

    expect(state.errors.length).toBe(1);
    expect(state.errors[0]).toBe(errorMessage);
  });

  test('Deleting a trancription', () => {
    const mockTranscription: ITranscription = {
      id: 1,
      text: '',
      voice: 'Test'
    };

    state.transcriptionList.push(mockTranscription);

    mutations.deleteTranscription(state, 1);

    expect(state.errors.length).toBe(0);
  });

  test('Delete should throw error when transcription is not found', () => {
    mutations.deleteTranscription(state, 1);

    expect(state.errors.length).toBe(1);
  });

  test('Should throw error when upload is not succesful', () => {
    const errorMessage = 'Test Error';

    mutations.uploadError(state, errorMessage);

    expect(state.errors.length).toBe(1);
    expect(state.errors[0]).toBe(errorMessage);
  });

  test('Should throw error when upload is not succesful and no message is passed to the upload error mutation', () => {
    const defaultUploadErrorMessage =
      'A problem occurred while uploading, please try again in a few minutes';

    mutations.uploadError(state, '');

    expect(state.errors.length).toBe(1);
    expect(state.errors[0]).toBe(defaultUploadErrorMessage);
  });

  test('Should dismiss error', () => {
    state.errors.push('Test Error');

    mutations.dismissError(state, 0);

    expect(state.errors.length).toBe(0);
  });
});
