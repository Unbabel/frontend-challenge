import {ref} from "vue";
import type {TranscriptionDTO} from "../../integration/transcriptions/business/dto/transcription.dto";
import Transcriptions from "../../integration/transcriptions";

export const TranscriptionsStoreIdentifier: string = 'transcription-store';

export function TranscriptionsStore() {

    const transcriptions = ref(<TranscriptionDTO[]>[]);
    const filteredTranscriptions = ref(<TranscriptionDTO[]>[]);
    const transcription = ref(<TranscriptionDTO>{});

   async function getAllTranscriptions(): Promise<void> {
       transcriptions.value = await Transcriptions.getAllTranscriptions();

       if(!filteredTranscriptions.value.length) {
           filteredTranscriptions.value = transcriptions.value;
           return;
       }

       for (const incomingTranscription of transcriptions.value) {

           const existingTranscription = filteredTranscriptions.value.find(transcription => transcription.id === incomingTranscription.id);

           if(!existingTranscription) {
               filteredTranscriptions.value.push(incomingTranscription);
           }
       }
   }

    async function uploadTranscriptions(): Promise<void> {

        const toUpload = filteredTranscriptions.value.filter(transcription => {
            if( (transcription.isNew || transcription.isEdited) && (transcription.voice.trim() !== '')) {
                return transcription;
            }
        });

        if(!toUpload.length) {
            return;
        }

        await Transcriptions.uploadTranscriptions(toUpload);

        for (const toUploadElement of toUpload) {
            filteredTranscriptions.value = filteredTranscriptions.value.filter(transcription => transcription.id !== toUploadElement.id);
        }

    }

   async function addNewTranscription(): Promise<void> {

       const tempId = filteredTranscriptions.value.length + Math.round(Math.random() * 9999);

       filteredTranscriptions.value.push(<TranscriptionDTO>{
           id: tempId,
           voice: '',
           text: '',
           isNew: true
       });

   }

   async function removeTranscription(transcriptionID: number): Promise<void> {

       filteredTranscriptions.value = filteredTranscriptions.value
           .filter( transcription => transcription.id !== transcriptionID);

   }

   return {
       getAllTranscriptions,
       uploadTranscriptions,
       addNewTranscription,
       removeTranscription,
       transcriptions,
       filteredTranscriptions,
       transcription
   };
}

