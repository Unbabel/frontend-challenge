<template>
  <div class="voice-transcriptions-wrapper">
    <TheHeader />
    <VoiceTranscriptions :transcriptions="transcriptions" />
    <AppIcon
      v-if="transcriptions.length > 0"
      class="voice-transcriptions-wrapper__add-row"
      icon="add-row"
      @execute-method="createTranscription"
    />
  </div>
</template>

<script>
import AppIcon from "@/components/common/AppIcon.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import VoiceTranscriptions from "@/components/transcriptions/VoiceTranscriptions.vue";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "VoiceTranscriptionsWrapper",
  components: { AppIcon, TheHeader, VoiceTranscriptions },
  computed: {
    ...mapGetters({
      transcriptions: 'getTranscriptions',
    }),
  },
  methods: {
    ...mapActions(['createNewTranscription']),

    async createTranscription () {
      console.log('createNewTranscription')
      await this.createNewTranscription();
    }
  }
};
</script>

<style lang="scss" scoped>
    .voice-transcriptions-wrapper {
        height: 90%;
        box-sizing: border-box;
        box-shadow: 0px 1px 2px rgb(0 0 0 / 24%), 0px 1px 3px rgb(0 0 0 / 12%);
    }

    .voice-transcriptions-wrapper__add-row {
      display: flex;
      justify-content: center;
    }
</style>
