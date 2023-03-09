<template>
  <div class="transcriptions-page">
    <VoiceTranscriptionsWrapper />
  </div>
</template>

<script>
import VoiceTranscriptionsWrapper from "@/components/transcriptions/VoiceTranscriptionsWrapper.vue";

export default {
  name: "TranscriptionsPage",

  components: { VoiceTranscriptionsWrapper },
};
</script>

<style lanbg="scss" scoped>
  .transcriptions-page {
    height: 100%;
  }
</style>
