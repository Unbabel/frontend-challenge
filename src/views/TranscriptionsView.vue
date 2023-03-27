<template>

  <ViewLayout>
    <template v-slot:content>

      <h2 v-if="!filteredTranscriptions.length"
          class="transcription__view_no-data-message"
          data-testid="transcription__view_no-data-message">No transcriptions available!</h2>

      <TranscriptionListComponent
          :transcriptions="filteredTranscriptions"
      />

      <TranscriptionAddButtonComponent
          :transcriptionAddButtonIcon="'./assets/add-row.svg'" />

    </template>
  </ViewLayout>

</template>

<script setup lang="ts">
import ViewLayout from "../layout/view-layout/ViewLayout.vue";
import Store from "../store";
import { storeToRefs } from 'pinia';
import Eventbus from "../eventbus";
import {
  TranscriptionEventTypeConstants
} from "../integration/transcriptions/business/constants/transcription-event-type.constants";
import TranscriptionListComponent from "../components/transcription-list/transcription-list-component.vue";
import TranscriptionAddButtonComponent
  from "../components/transcription-add-button/transcription-add-button-component.vue";
import {onBeforeUnmount} from "vue";

const transcriptionStore = Store.useTranscriptionsStore();
const {transcriptions, filteredTranscriptions} = storeToRefs(transcriptionStore);

onBeforeUnmount(() => {
  Eventbus.off(TranscriptionEventTypeConstants.DOWNLOAD_DATA);
  Eventbus.off(TranscriptionEventTypeConstants.UPLOAD_DATA);
  Eventbus.off(TranscriptionEventTypeConstants.ADD_NEW_TRANSCRIPTION);
  Eventbus.off(TranscriptionEventTypeConstants.DELETE_TRANSCRIPTION);
});


Eventbus.on(TranscriptionEventTypeConstants.UPLOAD_DATA, async ():Promise<void> => {
  await transcriptionStore.uploadTranscriptions();
});

Eventbus.on(TranscriptionEventTypeConstants.DOWNLOAD_DATA, async ():Promise<void> => {
  await transcriptionStore.getAllTranscriptions();
});

Eventbus.on(TranscriptionEventTypeConstants.ADD_NEW_TRANSCRIPTION, async ():Promise<void> => {
  await transcriptionStore.addNewTranscription();
});

Eventbus.on(TranscriptionEventTypeConstants.DELETE_TRANSCRIPTION, async (transcriptionID):Promise<void> => {

  if(!parseInt(transcriptionID as string)) {
    return;
  }

  await transcriptionStore.removeTranscription(transcriptionID as number);
});

</script>

<style scoped lang="scss">
.transcription__view_no-data-message{

  text-align: center;
  font-size: 14px;
  color: #414C5E;
}

.transcription__view__button__container {
  text-align: center;

  .transcription__view__button-add {
    text-align: center;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
}

</style>
