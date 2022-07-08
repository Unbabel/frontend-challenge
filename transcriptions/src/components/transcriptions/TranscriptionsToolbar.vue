<template>
  <header class="toolbar">
    <div class="toolbar-wrapper">
      <h1>Transcriptions Challenge</h1>
      <button
        type="button"
        class="btn-upload"
        aria-label="upload transcriptions"
        @click="saveTranscriptions"
        :disabled="isButtonDisabled"
      >
        <img
          src="@/assets/upload.svg"
          width="24"
          height="24"
          alt="upload icon"
          title="Upload transcriptions"
        />
      </button>
      <button
        type="button"
        class="btn-fetch"
        aria-label="fetch transcriptions"
        @click="getTranscriptions"
        :disabled="isButtonDisabled"
      >
        <img
          src="@/assets/fetch-document.svg"
          width="24"
          height="24"
          alt="add icon"
          title="Get transcriptions"
        />
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { ActionTypes } from "@/store/transcriptions";
import TranscriptionsBaseComponent from "@/mixins/TranscriptionsBaseComponent";

export default class TranscriptionsToolbar extends TranscriptionsBaseComponent {
  created() {
    this.sendAnalytics("load", "transcriptions", "page");
    this.setupActionListener();
  }

  getTranscriptions() {
    this.sendAnalytics("click", "fetch transcriptions");
    this.setButtonDisabledStatus(true);
    this.store.dispatch(ActionTypes.TRANSCRIPTIONS_FETCH);
  }

  saveTranscriptions() {
    this.sendAnalytics("click", "save transcriptions");
    this.setButtonDisabledStatus(true);
    this.store.dispatch(ActionTypes.TRANSCRIPTIONS_UPDATE);
  }
}
</script>

<style scoped lang="scss">
.toolbar {
  height: 69px;
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  border: 1px solid #979797;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  display: block;
  &-wrapper {
    max-width: 708px;
    margin: auto;
    width: 100%;
    height: 69px;
    display: grid;
    grid-template-columns: 1fr 40px 40px;
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 0;
    align-items: center;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin: 0;
    color: #414c5e;
    letter-spacing: 0;
    text-align: left;
    padding: 0 15px;
  }
  button {
    border: 0;
    background: transparent;
  }
  button:disabled > img {
    opacity: 0.4;
    cursor: progress;
  }
}
</style>
