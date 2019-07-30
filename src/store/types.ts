export interface ITranscription {
  id: number;
  voice: string;
  text: string;
}

export interface ITranscriptionState {
  transcriptionList: ITranscription[];
}

export interface IRootState {
  transcriptions: {
    list: ITranscription[];
  };
}
