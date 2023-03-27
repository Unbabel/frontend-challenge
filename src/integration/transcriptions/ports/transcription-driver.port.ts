import type {TranscriptionDTO} from "../business/dto/transcription.dto";

export interface TranscriptionDriverPort {
    getAllTranscriptions(): Promise<TranscriptionDTO[]>;
    uploadTranscriptions(transcriptionDTOs: TranscriptionDTO[]): Promise<void>;
}
