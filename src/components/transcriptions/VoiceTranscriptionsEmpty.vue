<template>
  <div class="voice-transcriptions-empty">
    <AppButton
      class="voice-transcriptions-empty__create"
      @click="create"
    >
      Create a new transcription
    </AppButton>
    or 
    <AppButton
      class="voice-transcriptions-empty__fetch"
      @click="fetch"
    >
      Fetch existing ones
    </AppButton>
  </div>
</template>

<script>
import AppButton from '@/components/common/AppButton.vue'
import { mapActions } from 'vuex'

export default {
    name: 'VoiceTranscriptionsEmpty',

    components: { AppButton },

    methods: {
        ...mapActions(['fetchTranscriptions', 'createTranscription']),

        async create () {
            await this.createTranscription()
        },

        async fetch () {
            await this.fetchTranscriptions() 
        }
    }
}
</script>
<style lang="scss" scoped>
    .voice-transcriptions-empty {
        background-color: $concrete;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>