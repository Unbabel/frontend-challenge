import config from '@/config';
import type { Transcription } from '../models/transcription';
import type { HttpService } from './http';

/**
 * Data service
 */
export class TranscriptionService {
  private http;

  constructor(http: HttpService) {
    this.http = http;
  }

  public getData(): Promise<Transcription[]> {
    return this.http.get<Transcription[]>(`${config.baseUrl}5ae1c5792d00004d009d7e5c`);
  }

  public updateData(payload: Transcription[]): Promise<void> {
    return this.http.post<void>(`${config.baseUrl}5ae1c5792d00004d009d7e5c`, payload);
  }
}
