<template>
  <div class="voice-transcriptions">
    <div
      v-for="(transcription, index) in transcriptions"
      :key="index"
      class="voice-transcriptions__row"
    >
      <AppCheckbox />
      <AppIcon
        icon="person"
      />
      <div class="voice-transcriptions__row-editable">
        <AppInput
          :voice="transcription.voice"
          @change-title="updateTitle($event, transcription)"
        />
        <AppTextarea
          :text="transcription.text"
          @change-description="updateDescription($event, transcription)"
        />
      </div>
      <AppIcon
        class="voice-transcriptions__row-delete"
        icon="delete"
        @execute-method="remove(transcription)"
      />
    </div>
  </div>
</template>
<script>
import AppIcon from "@/components/common/AppIcon.vue";
import AppInput from "@/components/common/AppInput.vue";
import AppTextarea from "@/components/common/AppTextarea.vue";
import AppCheckbox from "@/components/common/AppCheckbox.vue";
import { mapActions } from 'vuex'

export default {
  name: "VoiceTranscriptions",
  components: {
    AppIcon,
    AppInput,
    AppCheckbox,
    AppTextarea
  },

  props: {
    transcriptions: {
      type: Array,
      required: true
    }
  },

  methods: {
    ...mapActions(['removeTranscription', 'updateTranscriptionTitle', 'updateTranscriptionDescription']),

    async updateTitle ($event, transcription) {
      transcription.voice = $event;
      await this.updateTranscriptionTitle(transcription)
    },

    async updateDescription ($event, transcription) {
      transcription.text = $event;
      await this.updateTranscriptionDescription(transcription)
    },

    async remove (transcription) {
      await this.removeTranscription(transcription)
    },
  }
};
</script>
<style lang="scss" scoped>
.voice-transcriptions {
  background-color: $white;
  margin: $default-size auto $default-size auto;
  width: 56%;
  box-sizing: border-box;
}

.voice-transcriptions__row {
  display: flex;
  padding-bottom: $default-size;
  padding-top: $default-size;
  border-bottom: 1px solid $porcelain;
  .voice-transcriptions__row-delete {
    visibility: hidden;;
  }

  &:hover {

    .voice-transcriptions__row-delete {
      visibility: visible;
    }
  }
}

.voice-transcriptions__row-editable {
  width: 100%;
}
</style>
