<template>
  <div class="transcription">
    <div class="transcription-header">
      <CheckboxField v-model="state.selected" class="checkbox" />
      <PersonIcon class="person-icon" />
      <label>
        <TextField class="title" v-model="state.innerTranscription.voice" placeholder="Type a title..." />
      </label>
      <div class="trash-icon icon-button" @click="remove">
        <TrashIcon />
      </div>
    </div>
    <div class="transcription-content">
      <TextareaField class="text-normal" v-model="state.innerTranscription.text" placeholder="Type a title..." />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Transcription } from '@/app/models/transcription';
import { reactive, watch } from 'vue';
import { useStore } from 'vuex';
import CheckboxField from '../fields/CheckboxField.vue';
import TextareaField from '../fields/TextareaField.vue';
import TextField from '../fields/TextField.vue';
import PersonIcon from '../icons/PersonIcon.vue';
import TrashIcon from '../icons/TrashIcon.vue';

const props = defineProps<{
  /**
   *
   */
  transcription: Transcription;
}>();

const store = useStore();

const state = reactive({
  innerTranscription: Object.assign({}, props.transcription),
  selected: false
});

function remove() {
  store.commit('deleteTranscription', props.transcription.id);
}

watch(state.innerTranscription, (newTranscrition) => {
  store.commit('setTranscription', newTranscrition);
});
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
      margin-right: 0.5rem;
    }
  }

  &-content {
    margin: 0 2rem 0.5rem 4.3rem;
  }
}
</stlye>
