import type {TranscriptionResponseServiceDTO} from "../business/dto/transcription-response-service.dto";

export interface TranscriptionDrivenReaderPort {
    get(resource: string):  Promise<TranscriptionResponseServiceDTO[]>;
}
