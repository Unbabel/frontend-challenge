<template>
  <div v-if="transcriptions.length">
    <ul class="transcription__list" data-testid="transcription__list">
      <li v-for="transcription in transcriptions" :key="transcription.id" :id="transcription.id.toString()" class="transcription__list__item" data-testid="transcription__list__item">
        <TranscriptionItemComponent
            :transcription="transcription"
            :transcriptionIcon="'./assets/person.svg'"
            :transcriptionDeleteButtonIcon="'./assets/delete.svg'" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import {PropType} from "vue";
import type {TranscriptionDTO} from "../../integration/transcriptions/business/dto/transcription.dto";
import TranscriptionItemComponent from '../transcription-item/transcription-item-component.vue';

defineProps({
  transcriptions: {
    type: Array as PropType<TranscriptionDTO[]>,
    required: false,
    default: () => <TranscriptionDTO[]>[]
  }
});

</script>

<style scoped lang="scss">
.transcription__list {
  list-style: none;
  padding: 0;
  border: 1px solid #dbdee3;
  background-color: white;

  .transcription__list__item {
    border-bottom: 1px solid #dbdee3;
  }

}

</style>
