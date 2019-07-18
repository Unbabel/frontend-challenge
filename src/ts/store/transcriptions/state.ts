import { ITranscription } from "../../types/types";

export interface ITranscriptionsState {
  list: ITranscription[];
}

export const initialTranscriptionListState: ITranscriptionsState = {
  list: undefined
};
