import { ITranscription } from "../../types/types";

export interface ITranscriptionsState {
  list: ITranscription[];
  loadingList: boolean;
  uploading: boolean;
}

export const initialTranscriptionListState: ITranscriptionsState = {
  list: undefined,
  loadingList: false,
  uploading: false
};
