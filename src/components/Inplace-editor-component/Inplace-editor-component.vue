<template>
  <div class="item-info">
    <div class="inplace-editor">
      <h3 @click="showInput()" v-if="!isInputVisible" class="inplace-editor--voice">{{transcriptionInfo.voice}}</h3>
      <div v-if="isInputVisible">
          <input v-model="transcriptionInfo.voice" type="text" />
          <button class="inplace-editor--button" @click="showInput()">Save</button>
      </div>
    </div>
    <div class="inplace-editor">
      <p @click="showTextarea()" v-if="!isTextareaVisible" class="inplace-editor--text">{{transcriptionInfo.text}}</p>
      <div v-if="isTextareaVisible">
        <textarea v-model="transcriptionInfo.text" />
        <button class="inplace-editor--button" @click="showTextarea()">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InplaceEditor extends Vue {
  private isInputVisible: boolean = false;
  private isTextareaVisible: boolean = false;

  @Prop() private transcriptionInfo!: {
    voice: string;
    text: string;
  };

  private showInput() {
    return this.isInputVisible ? this.isInputVisible = false : this.isInputVisible = true;
  }

  private showTextarea() {
    return this.isTextareaVisible ? this.isTextareaVisible = false : this.isTextareaVisible = true;
  }
}
</script>
