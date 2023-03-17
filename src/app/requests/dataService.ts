import config from '@/config';
import type { VoiceData } from '../models/data';
import type { HttpService } from './http';

/**
 * Data service
 */
export class DataService {
  private http;

  constructor(http: HttpService) {
    this.http = http;
  }

  public getData(): Promise<VoiceData[]> {
    return this.http.get<VoiceData[]>(`${config.baseUrl}5ae1c5792d00004d009d7e5c`);
  }

  public updateData(payload: VoiceData[]): Promise<void> {
    return this.http.post<void>(`${config.baseUrl}5ae1c5792d00004d009d7e5c`, payload);
  }
}
