<script setup>
import AppCard from "@/components/base/AppCard.vue";
import AppIcon from "@/components/base/AppIcon.vue";
import { useTranscriptionsStore } from "../store/useTranscriptionsStore";

const { transcriptions } = useTranscriptionsStore();
</script>

<template>
  <main class="app-view">
    <AppCard>
      <div
        v-for="transcription in transcriptions"
        :key="`transcription_${transcription.Id}`"
        class="transcription-item"
      >
        <div><input type="checkbox" /></div>
        <div>
          <AppIcon icon-name="person"></AppIcon>
        </div>
        <div>{{ transcription.Voice }}</div>
        <div>{{ transcription.Text }}</div>
        <div>
          <AppIcon class="on-hover-icon" icon-name="delete"></AppIcon>
        </div>
      </div>
    </AppCard>
    <div class="padding-all text-center">
      <AppIcon icon-name="add-row"></AppIcon>
    </div>
  </main>
</template>

<style scoped lang="scss">
.transcription-item {
  .on-hover-icon {
    display: none;
  }

  &:hover .on-hover-icon {
    display: block;
  }
}
</style>
