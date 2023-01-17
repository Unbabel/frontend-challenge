<script setup>
import AppIcon from "@/components/base/AppIcon.vue";
import { useTranscriptionsStore } from "../../store/useTranscriptionsStore";

const { getTranscriptions } = useTranscriptionsStore();
</script>

<template>
  <div class="view-actions-container">
    <AppIcon icon-name="upload"></AppIcon>
    <AppIcon
      icon-name="fetch-document"
      button
      @click="getTranscriptions"
    ></AppIcon>
  </div>
</template>
