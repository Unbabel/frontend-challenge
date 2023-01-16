<script setup>
import AppCard from "../components/base/AppCard.vue";
import { useTranscriptionsStore } from "../store/useTranscriptionsStore";

const { transcriptions } = useTranscriptionsStore();
</script>

<template>
  <main class="app-view">
    <AppCard>
      <pre>{{ transcriptions }}</pre>
    </AppCard>
  </main>
</template>
