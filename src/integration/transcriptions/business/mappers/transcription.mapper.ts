import type {TranscriptionMapperInterface} from "./transcription-mapper-interface";
import type {TranscriptionDTO} from "../dto/transcription.dto";
import type {TranscriptionResponseServiceDTO} from "../dto/transcription-response-service.dto";
import type {TranscriptionRequestServiceDTO} from "../dto/transcription-request-service.dto";

async function mapToTranscriptionCollection(data: TranscriptionResponseServiceDTO[]): Promise<TranscriptionDTO[]> {
    return data.map(transcription => (<TranscriptionDTO>{
        id: transcription.id,
        voice: transcription.voice,
        text: transcription.text,
        isNew: false
    }));
}

async function  mapFromTranscriptionCollection(data: TranscriptionDTO[]): Promise<TranscriptionRequestServiceDTO[]> {
    return data.map(transcription => (<TranscriptionRequestServiceDTO>{
        id: transcription.id,
        voice: transcription.voice,
        text: transcription.text
    }));
}

export const TranscriptionMapper: TranscriptionMapperInterface = {
    mapToTranscriptionCollection,
    mapFromTranscriptionCollection
};
