export interface ITranscription {
  id: number;
  voice: string;
  text: string;
  [key: string]: any;
}

export interface IChangeObject {
  id: number;
  field: string;
  newValue: string;
}

export interface ITranscriptionState {
  transcriptionList: ITranscription[];
  errors: any[];
}

export interface IRootState {
  transcriptions: {
    list: ITranscription[];
  };
}
