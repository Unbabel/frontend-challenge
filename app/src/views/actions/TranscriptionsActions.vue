<script setup>
import AppIcon from "@/components/base/AppIcon.vue";
import { useTranscriptionsStore } from "../../store/useTranscriptionsStore";

const { getTranscriptions, saveTranscriptions } = useTranscriptionsStore();
</script>

<template>
  <div class="view-actions-container">
    <AppIcon icon-name="upload" button @click="saveTranscriptions"></AppIcon>
    <AppIcon
      icon-name="fetch-document"
      button
      @click="getTranscriptions"
    ></AppIcon>
  </div>
</template>
