<template>
  <div class="voice-transcriptions-wrapper">
    <TheHeader />
    <VoiceTranscriptions />
  </div>
</template>
<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import VoiceTranscriptions from "@/components/transcriptions/VoiceTranscriptions.vue";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "VoiceTranscriptionsWrapper",
  components: { TheHeader, VoiceTranscriptions },
  computed: {
    ...mapGetters({
      transcriptions: 'getTranscriptions',
    }),
  },
  async created () {
    await this.fetchTranscriptions();
    console.log('transcriptions', this.transcriptions.length)
  },
  methods: {
    ...mapActions(['fetchTranscriptions']),

    upload() {
      console.log("upload");
    },

    fetch() {
      console.log("fetch");
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
