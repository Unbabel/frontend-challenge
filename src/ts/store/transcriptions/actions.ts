import { ITranscription } from "ts/types/types";
import { defineAction } from "../../utils/actions-utils/actions-utils";

export const GET_TRANSCRIPTION_LIST = defineAction<{}>("GET_TRANSCRIPTION_LIST");

export const SET_LIST_ON_STATE = defineAction<{
  transcriptionList: ITranscription[];
}>("SET_LIST_ON_STATE");
