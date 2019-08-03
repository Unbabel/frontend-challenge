jest.mock('axios', () => ({
  get: jest.fn(
    () =>
      new Promise(() => {
        '';
      })
  ),
  post: jest.fn(
    () =>
      new Promise(() => {
        '';
      })
  )
}));

import { ITranscription } from '@/store/types';
import axios from 'axios';
import { actions } from '../../../src/store/actions/transcription-actions';

describe('Transcriptions actions tests', () => {
  const url = 'https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';
  const commit = jest.fn();

  let transcriptionActions: any;

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

  beforeEach(() => {
    transcriptionActions = actions;
  });

  test('Getting a list of transcriptions', () => {
    transcriptionActions.getTranscriptions({ commit });

    expect(axios.get).toBeCalledWith(url);
  });

  test('Adding a transcription', () => {
    transcriptionActions.addTranscription({ commit });

    expect(commit).toHaveBeenCalled();
  });

  test('Editing a transcription', () => {
    const editMock: ITranscription = {
      id: 1,
      text: 'This is a one line sentence made to show how it fits',
      voice: 'Voice 2'
    };

    transcriptionActions.editTranscription({ commit }, editMock);

    expect(commit).toHaveBeenCalled();
  });

  test('Deleting a transcription', () => {
    const transcriptionToDeleteId = 1;

    transcriptionActions.editTranscription({ commit }, transcriptionToDeleteId);

    expect(commit).toHaveBeenCalled();
  });

  test('Uploading a list of transcriptions', () => {
    transcriptionActions.uploadTranscriptions({ commit }, transcriptionListMock);

    expect(axios.post).toBeCalledWith(url, transcriptionListMock);
  });

  test('Dismissing an error', () => {
    const errorToDismissIndex = 1;

    transcriptionActions.dismissError({ commit }, errorToDismissIndex);

    expect(commit).toHaveBeenCalled();
  });
});
