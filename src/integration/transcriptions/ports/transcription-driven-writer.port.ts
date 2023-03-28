import type {TranscriptionRequestServiceDTO} from "../business/dto/transcription-request-service.dto";

export interface TranscriptionDrivenWriterPort {
    write(resource: string, payload: TranscriptionRequestServiceDTO): Promise<void>;
}
