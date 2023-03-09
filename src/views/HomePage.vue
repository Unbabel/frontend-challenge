<template>
  <div class="home-page">
    <TheHeader />
    <VoiceTranscriptions :transcriptions="transcriptions" />
    <AppIcon
      v-if="transcriptions.length > 0"
      class="home-page__add-row"
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
  name: "HomePage",
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
    .home-page__add-row {
      left: 50%;
      position: absolute;
      padding-bottom: $default-size;
    }
</style>
