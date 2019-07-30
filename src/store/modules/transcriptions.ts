import { Module } from 'vuex';
import { actions } from '../actions/transcription-actions';
import { mutations } from '../mutations/transcription-mutations';
import { IRootState, ITranscriptionState } from '../types';

export const state: ITranscriptionState = {
  transcriptionList: []
};

const namespaced: boolean = true;

export const transcription: Module<ITranscriptionState, IRootState> = {
  namespaced,
  state,
  actions,
  mutations
};
