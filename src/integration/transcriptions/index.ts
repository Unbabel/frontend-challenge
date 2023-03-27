import {TranscriptionService} from "./transcription.service";
import {TranscriptionApiReadAdapter} from "./adapters/transcription-api-read.adapter";
import {TranscriptionApiWriteAdapter} from "./adapters/transcription-api-write.adapter";

export default TranscriptionService(TranscriptionApiReadAdapter(), TranscriptionApiWriteAdapter());
