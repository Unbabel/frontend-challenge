<script setup>
import AppIcon from "@/components/base/AppIcon.vue";
import TranscriptionsList from "../components/transcriptions/TranscriptionsList.vue";
import { useTranscriptionsStore } from "../store/useTranscriptionsStore";

const { transcriptions } = useTranscriptionsStore();
</script>

<template>
  <main class="app-view">
    <section>
      <TranscriptionsList :transcriptions="transcriptions"></TranscriptionsList>
    </section>
    <div class="padding-all text-center">
      <AppIcon icon-name="add-row"></AppIcon>
    </div>
  </main>
</template>
