export interface ITranscription {
  id: number;
  voice: string;
  text: string;
  [key: string]: any;
}

export interface IChangeObject {
  id: number;
  field: 'voice' | 'text';
  newValue: string;
}

export interface ITranscriptionState {
  transcriptionList: ITranscription[];
  errors: any[];
}

export interface IRootState {
  app: string;
}
