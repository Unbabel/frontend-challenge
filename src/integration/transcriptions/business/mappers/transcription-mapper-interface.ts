import type {TranscriptionDTO} from "../dto/transcription.dto";
import type {TranscriptionResponseServiceDTO} from "../dto/transcription-response-service.dto";
import type {TranscriptionRequestServiceDTO} from "../dto/transcription-request-service.dto";

export interface TranscriptionMapperInterface {
    mapToTranscriptionCollection(data: TranscriptionResponseServiceDTO[]): Promise<TranscriptionDTO[]>;
    mapFromTranscriptionCollection(data: TranscriptionDTO[]): Promise<TranscriptionRequestServiceDTO[]>;
}
