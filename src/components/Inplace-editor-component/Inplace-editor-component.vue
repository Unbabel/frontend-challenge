<template>
  <div class="item-info">
    <div class="inplace-editor">
      <h3
        @click="showInput()"
        v-if="!isInputVisible"
        class="inplace-editor--voice"
      >{{transcriptionInfo.voice}}</h3>
      <div v-if="isInputVisible || !transcriptionInfo.voice">
        <label for="voice" class="visually-hidden">Edit {{transcriptionInfo.voice}} title</label>
        <input
          name="voice"
          placeholder="Write your transcription title here"
          v-bind:autofocus="isInputVisible"
          v-model="transcriptionInfo.voice"
          type="text"
        />
        <button
          class="inplace-editor--button"
          @click="showInput(); editRow(transcriptionInfo.id, 'voice', transcriptionInfo.voice)"
        >
          <svgicon name="checked" height="1rem" width="1rem" :original="true"></svgicon>
        </button>
        <h3 v-if="errors.voice" class="warning-message">{{ errors.voice }}</h3>
      </div>
    </div>
    <div class="inplace-editor">
      <p
        @click="showTextarea()"
        v-if="!isTextareaVisible"
        class="inplace-editor--text"
      >{{transcriptionInfo.text}}</p>
      <div v-if="isTextareaVisible || !transcriptionInfo.text">
        <label for="text" class="visually-hidden">Edit {{transcriptionInfo.voice}} title</label>
        <textarea
          name="text"
          placeholder="Write your transcription text here"
          v-bind:autofocus="isInputVisible"
          v-model="transcriptionInfo.text"
        />
        <button
          class="inplace-editor--button"
          @click="showTextarea(); editRow(transcriptionInfo.id, 'text', transcriptionInfo.text)"
        >
          <svgicon name="checked" height="1rem" width="1rem" :original="true"></svgicon>
        </button>
        <h3 v-if="errors.text" class="warning-message">{{ errors.text }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import '../icons/checked';
import { ITranscription, IChangeObject } from '../../store/types';

interface IComponentErrors {
  voice: string;
  text: string;
  [key: string]: any;
}

const namespace: string = 'transcription';

@Component
export default class InplaceEditor extends Vue {
  private isInputVisible: boolean = false;
  private isTextareaVisible: boolean = false;
  private errors: IComponentErrors = {
    voice: '',
    text: '',
    clearErrors: setTimeout(() => {
      this.errors.voice = '';
      this.errors.text = '';
    }, 3000)
  };

  @Prop() private transcriptionInfo!: {
    voice: string;
    text: string;
    id: number;
  };

  @Action('editTranscription', { namespace }) private editTranscription: any;

  private showInput() {
    return (this.isInputVisible = !this.isInputVisible);
  }

  private showTextarea() {
    return (this.isTextareaVisible = !this.isTextareaVisible);
  }

  private editRow(rowId: number, field: string, newValue: string) {
    if (!newValue) {
      this.errors[field] = `The ${field} field is invalid`;

      return this.errors.clearErrors;
    }

    const obj: IChangeObject = {
      id: rowId,
      field,
      newValue
    };

    return this.editTranscription(obj);
  }
}
</script>
