import type {TranscriptionDrivenReaderPort} from "../ports/transcription-driven-reader.port";
import type {TranscriptionResponseServiceDTO} from "../business/dto/transcription-response-service.dto";
import {ApiEngine} from "../../../api-engine";
import Settings from "../../../settings";

export function TranscriptionApiReadAdapter(): TranscriptionDrivenReaderPort {

    const apiEngine = ApiEngine(`${Settings.endpoint}`);

    async function get(resource: string): Promise<TranscriptionResponseServiceDTO[]> {
        const response = await apiEngine.get(`${resource}`);
        return response['data'];
    }

    return {
      get
    };
}
