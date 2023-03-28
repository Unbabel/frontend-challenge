import type {TranscriptionDrivenWriterPort} from "../ports/transcription-driven-writer.port";
import type {TranscriptionRequestServiceDTO} from "../business/dto/transcription-request-service.dto";
import {ApiEngine} from "../../../api-engine";
import Settings from "../../../settings";

export function TranscriptionApiWriteAdapter(): TranscriptionDrivenWriterPort {

    const apiEngine = ApiEngine(`${Settings.endpoint}`);

    async function write(resource: string, payload: TranscriptionRequestServiceDTO): Promise<void> {
        await apiEngine.post(`${resource}`, payload);
        return;
    }

    return {
        write
    };
}
