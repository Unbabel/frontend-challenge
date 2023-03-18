<template>
  <div class="transcription">
    <div class="transcription-header">
      <CheckboxField class="checkbox" @input="onInput" />
      <PersonIcon class="person-icon" />
      <label> {{ transcription.voice }} </label>
      <TrashIcon class="trash-icon icon-button" />
    </div>
    <div class="transcription-content">{{ transcription.text }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Transcription } from '@/app/models/transcription';
import CheckboxField from '../fields/CheckboxField.vue';
import PersonIcon from '../icons/PersonIcon.vue';
import TrashIcon from '../icons/TrashIcon.vue';

defineProps<{
  /**
   *
   */
  transcription: Transcription;
}>();

function onInput(value: boolean) {
  console.log(value);
}
</script>

<stlye lang="scss" scoped>
.transcription {
  padding: 1rem 2rem;

  &:hover .transcription-header > .trash-icon {
    opacity: 1;
  }

  &-header {
    display: grid;
    align-items: center;
    grid-template-columns: min-content min-content 1fr min-content;

    .trash-icon {
      opacity: 0;
    }

    .checkbox,
    .person-icon {
      margin-right: 1rem;
    }
  }

  &-content {
    margin-left: 5rem;
  }
}
</stlye>
