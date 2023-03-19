import config from '@/config';
import type { Transcription } from '../models/transcription';
import type { HttpService } from './http';

/**
 * Transcription service
 */
export class TranscriptionService {
  private http;

  constructor(http: HttpService) {
    this.http = http;
  }

  /**
   * Fetchs all the transcriptions from the API
   * @returns Promise<Transcription[]>
   */
  public getData(): Promise<Transcription[]> {
    return this.http.get<Transcription[]>(`${config.baseUrl}5ae1c5792d00004d009d7e5c`);
  }

  /**
   * Updates a set of transcriptions
   * @param payload {Transcription[]} Data to be updated
   * @returns Promise<Transcription[]>
   */
  public updateData(payload: Transcription[]): Promise<Transcription[]> {
    return this.http.post<Transcription[]>(`${config.baseUrl}5ae1c5792d00004d009d7e5c`, payload);
  }
}
