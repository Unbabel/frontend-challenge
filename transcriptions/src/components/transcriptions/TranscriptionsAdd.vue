<template>
  <section class="add-toolbar">
    <button
      type="button"
      class="btn-add"
      aria-label="add transcription"
      @click="addItem"
      :disabled="isButtonDisabled"
    >
      <img
        src="@/assets/add-row.svg"
        alt="Add row icon"
        title="Add a transcription"
        width="32"
        height="32"
        @click="addTranscription"
      />
    </button>
  </section>
</template>

<script lang="ts">
import TranscriptionsBaseComponent from "@/mixins/TranscriptionsBaseComponent";
import { ActionTypes } from "@/store/transcriptions";

export default class TranscriptionsAdd extends TranscriptionsBaseComponent {
  private tempId = 0;

  created() {
    this.setupActionListener();
  }

  addTranscription() {
    this.tempId -= 1;
    this.sendAnalytics("click", "add transcription", this.tempId);
    this.store.dispatch(ActionTypes.TRANSCRIPTIONS_ADD, this.tempId);
  }
}
</script>

<style scoped lang="scss">
.add-toolbar {
  height: 106px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    background: transparent;
    width: 32px;
    height: 32px;
  }

  button:disabled > img {
    opacity: 0.4;
    cursor: progress;
  }
}
</style>
