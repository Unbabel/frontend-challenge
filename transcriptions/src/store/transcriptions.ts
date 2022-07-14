/* eslint-disable */

// TODO: fake timeout to show that actions are disabled during insertion
const fakeTimeout = 150;

import { transcriptionsAPI } from "@/services";
import {
  FieldPartial,
  State,
  Transcription,
  TranscriptionList,
  TranscriptionResponse,
} from "@/types";
import { Commit, MutationTree } from "vuex";

export enum ActionTypes {
  TRANSCRIPTIONS_FETCH = "TRANSCRIPTIONS_FETCH",
  TRANSCRIPTIONS_UPDATE = "TRANSCRIPTIONS_UPDATE",
  TRANSCRIPTIONS_ADD = "TRANSCRIPTIONS_ADD",
  TRANSCRIPTIONS_REMOVE = "TRANSCRIPTIONS_REMOVE",
}


export enum MutationTypes {
  TRANSCRIPTIONS_ADD_START = "TRANSCRIPTIONS_ADD_START",
  TRANSCRIPTIONS_ADD_ONE = "TRANSCRIPTIONS_ADD_ONE",
  TRANSCRIPTIONS_REMOVE_START = "TRANSCRIPTIONS_REMOVE_START",
  TRANSCRIPTIONS_REMOVE_ONE = "TRANSCRIPTIONS_REMOVE_ONE",
  TRANSCRIPTIONS_FETCH_START = "TRANSCRIPTIONS_FETCH_START",
  TRANSCRIPTIONS_FETCH_SUCCESS = "TRANSCRIPTIONS_FETCH_SUCCESS",
  TRANSCRIPTIONS_FETCH_FAILURE = "TRANSCRIPTIONS_FETCH_FAILURE",
  TRANSCRIPTIONS_UPDATE_START = "TRANSCRIPTIONS_UPDATE_START",
  TRANSCRIPTIONS_UPDATE_SUCCESS = "TRANSCRIPTIONS_UPDATE_SUCCESS",
  TRANSCRIPTIONS_UPDATE_FAILURE = "TRANSCRIPTIONS_UPDATE_FAILURE",
  TRANSCRIPTIONS_SET_FIELD = "TRANSCRIPTIONS_SET_FIELD",
}

export type Mutations<S = State> = {
  [MutationTypes.TRANSCRIPTIONS_ADD_START](state: S, payload: number): void;
  [MutationTypes.TRANSCRIPTIONS_ADD_ONE](state: S, payload: number): void;
  [MutationTypes.TRANSCRIPTIONS_REMOVE_START](state: S, payload: number): void;
  [MutationTypes.TRANSCRIPTIONS_REMOVE_ONE](state: S, payload: number): void;
  [MutationTypes.TRANSCRIPTIONS_SET_FIELD](state: S, payload: FieldPartial): void;
  [MutationTypes.TRANSCRIPTIONS_FETCH_SUCCESS](
    state: S,
    payload: TranscriptionList
  ): void;
  [MutationTypes.TRANSCRIPTIONS_FETCH_FAILURE](
    state: S,
    payload: ErrorEvent
  ): void;
  [MutationTypes.TRANSCRIPTIONS_UPDATE_START](state: S): void;
  [MutationTypes.TRANSCRIPTIONS_UPDATE_SUCCESS](
    state: S,
    payload: TranscriptionList
  ): void;
  [MutationTypes.TRANSCRIPTIONS_UPDATE_FAILURE](
    state: S,
    payload: ErrorEvent
  ): void;
};

export const transcriptionActions = {
  [ActionTypes.TRANSCRIPTIONS_REMOVE]: async ({ commit }: { commit: Commit; }, id: number) => {
    commit(MutationTypes.TRANSCRIPTIONS_REMOVE_START, id);
    setTimeout(() => {
      commit(MutationTypes.TRANSCRIPTIONS_REMOVE_ONE, id);
    }, fakeTimeout);
  },
  [ActionTypes.TRANSCRIPTIONS_ADD]: async ({ commit }: { commit: Commit; }, id: number) => {
    commit(MutationTypes.TRANSCRIPTIONS_ADD_START, id);
    setTimeout(() => {
      commit(MutationTypes.TRANSCRIPTIONS_ADD_ONE, id);
    }, fakeTimeout);
  },
  [ActionTypes.TRANSCRIPTIONS_FETCH]: async ({
    commit,
  }: {
    commit: Commit;
  }) => {
    return await transcriptionsAPI
      .fetch()
      .then((data: TranscriptionResponse) => {
        commit(MutationTypes.TRANSCRIPTIONS_FETCH_START);
        commit(MutationTypes.TRANSCRIPTIONS_FETCH_SUCCESS, data);
      })
      .catch((error: ErrorEvent) => {
        commit(MutationTypes.TRANSCRIPTIONS_FETCH_FAILURE, error);
      });
  },
  [ActionTypes.TRANSCRIPTIONS_UPDATE]: async ({
    commit,
    state,
   }: {
    commit: Commit;
    state: State;
  }) => {
    const msg = state.transcriptions.data;
    return await transcriptionsAPI
      .update(msg)
      .then((data: TranscriptionResponse) => {
        commit(MutationTypes.TRANSCRIPTIONS_UPDATE_START);
        commit(MutationTypes.TRANSCRIPTIONS_UPDATE_SUCCESS, data);
      })
      .catch((error: ErrorEvent) => {
        commit(MutationTypes.TRANSCRIPTIONS_UPDATE_FAILURE, error);
      });
  },
};

export const transcriptionMutations: MutationTree<State> & Mutations = {
  [MutationTypes.TRANSCRIPTIONS_FETCH_START]: (state: State): void => {
    state.transcriptions = { ...state.transcriptions, isFetching: true };
  },
  [MutationTypes.TRANSCRIPTIONS_FETCH_SUCCESS]: (
    state: State,
    payload: TranscriptionList
  ): void => {
    state.transcriptions = {
      ...state.transcriptions,
      data: payload,
      isFetching: false,
      error: null,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_FETCH_FAILURE]: (
    state: State,
    payload: ErrorEvent
  ): void => {
    state.transcriptions = {
      ...state.transcriptions,
      isFetching: false,
      error: payload,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_UPDATE_START]: (state: State): void => {
    state.transcriptions = { ...state.transcriptions, isUpdating: true };
  },
  [MutationTypes.TRANSCRIPTIONS_UPDATE_SUCCESS]: (
    state: State,
    payload: TranscriptionList
  ): void => {
    state.transcriptions = {
      ...state.transcriptions,
      data: payload,
      isUpdating: false,
      error: null,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_UPDATE_FAILURE]: (
    state: State,
    payload: ErrorEvent
  ): void => {
    state.transcriptions = {
      ...state.transcriptions,
      isUpdating: false,
      error: payload,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_ADD_START]: (state: State, payload: number): void => {
    state.transcriptions = {
      ...state.transcriptions,
      isAdding: true,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_ADD_ONE]: (state: State, payload: number): void => {
    const newTranscription: Transcription = { id: payload, voice: "", text: "" };
    state.transcriptions = {
      ...state.transcriptions,
      data: [...state.transcriptions.data, newTranscription],
      isAdding: false,
      isChanged: true,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_REMOVE_START]: (
    state: State,
    payload: number
  ): void => {
    state.transcriptions = {
      ...state.transcriptions,
      isRemoving: true,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_REMOVE_ONE]: (
    state: State,
    payload: number
  ): void => {
    state.transcriptions = {
      ...state.transcriptions,
      data: state.transcriptions.data.filter(
        (item: Transcription) => item.id !== payload
      ),
      isRemoving: false,
      isChanged: true,
    };
  },
  [MutationTypes.TRANSCRIPTIONS_SET_FIELD]: (
    state: State,
    payload: FieldPartial
  ): void => {
    const newList = [...state.transcriptions.data];
    let transcription = newList.find((item: Transcription) => item.id === payload.id);
    if (transcription) {
      transcription = { ...transcription, [payload.fieldName]: payload.fieldValue };
      state.transcriptions = {
        ...state.transcriptions,
        data: newList,
        isChanged: true,
      }
    }
  },
};
