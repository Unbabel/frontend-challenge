import config from '@/config';
import { HttpService } from './http';
import { TranscriptionService } from './transcriptionService';

export interface Services {
  $transcriptionService: TranscriptionService;
}

const http = new HttpService(config.baseUrl);

export const services: Services = {
  $transcriptionService: new TranscriptionService(http)
};
