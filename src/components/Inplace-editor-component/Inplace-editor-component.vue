<template>
  <div class="item-info">
    <div class="inplace-editor">
      <h3
        @click="toggleInput()"
        v-if="!isInputVisible"
        class="inplace-editor--voice"
      >{{(transcriptionInfo && transcriptionInfo.voice) || 'Write your transcription title here'}}</h3>
      <div v-if="isInputVisible">
        <label for="voice" class="visually-hidden">Edit {{transcriptionInfo.voice || 'voice'}} title</label>
        <input
          class="inplace-editor--voice-input"
          name="voice"
          placeholder="Write your transcription title here"
          v-focus
          v-model="transcriptionInfo.voice"
          type="text"
        />
        <button
          class="inplace-editor--button"
          @click="editRow(transcriptionInfo.id, 'voice', transcriptionInfo.voice)"
        >
          <svgicon name="checked" height="1rem" width="1rem" :original="true"></svgicon>
        </button>
      </div>
    </div>
    <div class="inplace-editor">
      <p
        @click="toggleTextarea()"
        v-if="!isTextareaVisible"
        class="inplace-editor--text"
      >{{(transcriptionInfo && transcriptionInfo.text) || 'Write your transcription text here'}}</p>
      <div v-if="isTextareaVisible">
        <label for="text" class="visually-hidden">Edit {{transcriptionInfo.text || 'text'}} title</label>
        <textarea
          class="inplace-editor--text-textarea"
          name="text"
          ref="text"
          placeholder="Write your transcription text here"
          v-focus
          v-model="transcriptionInfo.text"
        />
        <button
          class="inplace-editor--button"
          @click="editRow(transcriptionInfo.id, 'text', transcriptionInfo.text)"
        >
          <svgicon name="checked" height="1rem" width="1rem" :original="true"></svgicon>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import '../icons/checked';
import { ITranscription, IChangeObject } from '../../store/types';

const namespace: string = 'transcription';

// Directive to set focus on the input and text area once they're shown
Vue.directive('focus', {
    inserted(el) {
        el.focus();
    },
    update(el) {
        Vue.nextTick(() => {
              el.focus();
        });
    }
});

@Component
export default class InplaceEditor extends Vue {
  private isInputVisible: boolean = false;
  private isTextareaVisible: boolean = false;

  @Prop() private transcriptionInfo!: {
    voice: string;
    text: string;
    id: number;
  };

  @Action('editTranscription', { namespace }) private editTranscription: any;

  private toggleInput() {
    this.isTextareaVisible = false;
    return (this.isInputVisible = !this.isInputVisible);
  }

  private toggleTextarea() {
    this.isInputVisible = false;
    return this.isTextareaVisible = !this.isTextareaVisible;
  }

  private editRow(rowId: number, field: string, newValue: string) {
    const obj: IChangeObject = {
      id: rowId,
      field,
      newValue
    };

    if (this.isInputVisible && field === 'voice') {
      this.toggleInput();
    }

    if (this.isTextareaVisible && field === 'text') {
      this.toggleTextarea();
    }

    return this.editTranscription(obj);
  }
}
</script>
