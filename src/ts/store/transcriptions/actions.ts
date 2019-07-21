import { ITranscription } from "ts/types/types";
import { defineAction } from "../../utils/actions-utils/actions-utils";

export const SET_LIST_ON_STATE = defineAction<{
  transcriptionList: ITranscription[];
  loadingList?: boolean;
  uploading?: boolean;
}>("SET_LIST_ON_STATE");

export const ADD_NEW_ROW = defineAction<{ newRow: ITranscription }>(
  "ADD_NEW_ROW"
);

export const ON_ROW_EDIT = defineAction<{
  field: string;
  newValue: string;
  rowId: string;
}>("ON_ROW_EDIT");

export const GET_TRANSCRIPTION_LIST = defineAction<{}>(
  "GET_TRANSCRIPTION_LIST"
);

export const UPLOAD_DATA = defineAction<{}>("UPLOAD_DATA");

export const DELETE_DATA = defineAction<{
  transcription: ITranscription;
}>("DELETE_DATA");
