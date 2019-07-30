<template>
  <div class="item-info">
    <div class="inplace-editor">
      <h3
        @click="showInput()"
        v-if="!isInputVisible"
        class="inplace-editor--voice"
      >{{transcriptionInfo.voice}}</h3>
      <div v-if="isInputVisible || !transcriptionInfo.voice">
        <input ref="voice" v-model="transcriptionInfo.voice" type="text" />
        <button
          class="inplace-editor--button"
          @click="showInput()"
          :disabled="!transcriptionInfo.voice"
        >
          <svgicon name="checked" height="1rem" width="1rem" :original="true"></svgicon>
        </button>
      </div>
    </div>
    <div class="inplace-editor">
      <p
        @click="showTextarea()"
        v-if="!isTextareaVisible"
        class="inplace-editor--text"
      >{{transcriptionInfo.text}}</p>
      <div v-if="isTextareaVisible || !transcriptionInfo.text">
        <textarea ref="text" v-model="transcriptionInfo.text" />
        <button
          class="inplace-editor--button"
          @click="showTextarea()"
          :disabled="!transcriptionInfo.text"
        >
          <svgicon name="checked" height="1rem" width="1rem" :original="true"></svgicon>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '../icons/checked';

@Component
export default class InplaceEditor extends Vue {
  private isInputVisible: boolean = false;
  private isTextareaVisible: boolean = false;

  @Prop() private transcriptionInfo!: {
    voice: string;
    text: string;
  };

  private showInput() {
    return (this.isInputVisible = !this.isInputVisible);
  }

  private showTextarea() {
    return (this.isTextareaVisible = !this.isTextareaVisible);
  }
}
</script>
