<template>
  <div class="voice-transcriptions-wrapper">
    <TheHeader />
    <VoiceTranscriptions :transcriptions="transcriptions" />
  </div>
</template>
<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import VoiceTranscriptions from "@/components/transcriptions/VoiceTranscriptions.vue";
import { mapGetters } from 'vuex'

export default {
  name: "VoiceTranscriptionsWrapper",
  components: { TheHeader, VoiceTranscriptions },
  computed: {
    ...mapGetters({
      transcriptions: 'getTranscriptions',
    }),
  }
};
</script>

<style lang="scss" scoped>
    .voice-transcriptions-wrapper {
        box-sizing: border-box;
        border: 1px solid #EAEDEF;
    }
</style>
