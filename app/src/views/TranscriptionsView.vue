<script setup>
import AppIcon from "@/components/base/AppIcon.vue";
import TranscriptionsList from "../components/transcriptions/TranscriptionsList.vue";
import { useTranscriptionsStore } from "../store/useTranscriptionsStore";

const {
  transcriptions,
  toggleTranscriptionSelectionOfId,
  deleteTranscriptionOfId,
  addTranscription,
  updateTranscriptionOfId,
} = useTranscriptionsStore();

const handleTranscriptionSelection = ($transcription) => {
  toggleTranscriptionSelectionOfId($transcription.Id);
};

const handleTranscriptionDelete = ($transcription) => {
  deleteTranscriptionOfId($transcription.Id);
};

const handleTranscriptionUpdate = ({ transcription, $updatePatch }) => {
  updateTranscriptionOfId(transcription.Id, $updatePatch);
};
</script>

<template>
  <main class="app-view">
    <section>
      <TranscriptionsList
        :transcriptions="transcriptions"
        @transcription-select="handleTranscriptionSelection"
        @transcription-delete="handleTranscriptionDelete"
        @transcription-update="handleTranscriptionUpdate"
      ></TranscriptionsList>
    </section>
    <div class="padding-all text-center">
      <AppIcon icon-name="add-row" button @click="addTranscription"></AppIcon>
    </div>
  </main>
</template>
