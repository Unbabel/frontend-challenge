import {defineStore} from "pinia";
import {TranscriptionsStoreIdentifier, TranscriptionsStore} from "./sub-stores/transcriptions.store";

export default {
  useTranscriptionsStore: defineStore(TranscriptionsStoreIdentifier, TranscriptionsStore)
};
