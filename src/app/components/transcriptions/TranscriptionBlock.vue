<template>
  <div class="transcription-block-wrapper">
    <div class="transcription-block card-block">
      <div v-for="item in transcriptions" :key="item.id">
        <SingleTranscription class="transcription" :transcription="item" />
      </div>
    </div>
    <AddIcon class="icon-button" @click="add" />
  </div>
</template>

<script setup lang="ts">
import type { Transcription } from '@/app/models/transcription';
import AddIcon from '../icons/AddIcon.vue';
import SingleTranscription from './SingleTranscription.vue';

const transcriptions: Transcription[] = [
  { id: 1, voice: 'Voice 1', text: 'This is a text' },
  { id: 2, voice: 'Voice 2', text: 'This is a text' }
];

function add() {
  return true;
}
</script>

<stlye lang="scss" scoped>
.transcription-block-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .transcription-block {
    width: 100%;
    margin-bottom: 1rem;
    .transcription {
      border-bottom: 1px solid $grey-shadow;
    }
  }
}
</stlye>
