import type {TranscriptionDriverPort} from "./ports/transcription-driver.port";
import type {TranscriptionDrivenReaderPort} from "./ports/transcription-driven-reader.port";
import type {TranscriptionDrivenWriterPort} from "./ports/transcription-driven-writer.port";
import type {TranscriptionDTO} from "./business/dto/transcription.dto";
import {TranscriptionResourceConstants} from "./business/constants/transcription-resource.constants";
import {TranscriptionMapper} from "./business/mappers/transcription.mapper";

export function TranscriptionService(reader: TranscriptionDrivenReaderPort, writer: TranscriptionDrivenWriterPort): TranscriptionDriverPort {

    async function getAllTranscriptions(): Promise<TranscriptionDTO[]> {

        const response = await reader.get(TranscriptionResourceConstants.TRANSCRIPTIONS);

        if(Array.isArray(response) && !response.length) {
            return <TranscriptionDTO[]>[];
        }

        return TranscriptionMapper.mapToTranscriptionCollection(response);
    }

    async function uploadTranscriptions(transcriptionDTOs: TranscriptionDTO[]): Promise<void> {

        const transcriptionCollection = await TranscriptionMapper.mapFromTranscriptionCollection(transcriptionDTOs);

        for (const transcription of transcriptionCollection) {
            await writer.write(TranscriptionResourceConstants.TRANSCRIPTIONS, transcription);
        }
    }

    return {
      getAllTranscriptions,
      uploadTranscriptions
    };
}
