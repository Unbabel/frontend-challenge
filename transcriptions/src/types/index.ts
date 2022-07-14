export type Transcription = {
  id: number;
  voice: string;
  text: string;
};

export type FieldPartial = {
  id: number;
  fieldName: string;
  fieldValue: string;
};

export type TranscriptionList = Transcription[];

export type TranscriptionResponse = Transcription[];

export type State = {
  transcriptions: {
    data: TranscriptionList;
    isFetching: boolean;
    isChanged: boolean;
    isAdding: boolean;
    isRemoving: boolean;
    isUpdating: boolean;
    error: ErrorEvent | null;
  };
};
