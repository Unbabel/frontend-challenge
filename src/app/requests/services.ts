import config from '@/config';
import { HttpService } from './http';
import { TranscriptionService } from './transcriptionService';

export interface Services {
  $transcriptionService: TranscriptionService;
}

const http = new HttpService(config.baseUrl);

  /**
   * API Services
   * 
   * Will return an object with the current known API services
   */
export const services: Services = {
  $transcriptionService: new TranscriptionService(http)
};
