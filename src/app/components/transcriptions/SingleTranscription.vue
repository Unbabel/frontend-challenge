<template>
  <div class="transcription" v-if="state.innerTranscription">
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
      <TextareaField class="text-normal" v-model="state.innerTranscription.text" placeholder="Type a description..." />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Single Transcription
 *
 * Will display the transcription information and:
 *   - allow the user to change the title
 *   - allow the user to change the text
 *   - allow the user to select/remove the transaction entry
 */
import type { Transcription } from '@/app/models/transcription';
import { onMounted, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { cloneDeep, debounce, isEqual } from 'lodash';
import type { DebouncedFunc } from 'lodash';
import CheckboxField from '../fields/CheckboxField.vue';
import TextareaField from '../fields/TextareaField.vue';
import TextField from '../fields/TextField.vue';
import PersonIcon from '../icons/PersonIcon.vue';
import TrashIcon from '../icons/TrashIcon.vue';
import { TranscriptionMutations } from '@/app/store/transcriptionModule';

const props = defineProps<{
  /**
   * Focused transcription
   *
   * Will auto manage the transcription, changing the store
   * state if the transcription changes
   */
  transcription: Transcription;
}>();

const store = useStore();

const state = reactive({
  innerTranscription: null as Transcription | null,
  selected: false
});

// Transcription debounce save
let debouncedSetTranscription!: DebouncedFunc<(transcription: Transcription) => void>;

function remove() {
  store.commit(TranscriptionMutations.DELETE_TRANSCRIPTION, props.transcription.id);
}

onMounted(() => {
  debouncedSetTranscription = debounce((transcription: Transcription) => {
    store.commit(TranscriptionMutations.SET_TRANSCRIPTION, transcription);
  }, 200);
});

watch(
  () => props.transcription,
  () => {
    state.innerTranscription = cloneDeep(props.transcription);
  },
  { immediate: true }
);

watch(
  () => state.innerTranscription,
  () => {
    if (state.innerTranscription && !isEqual(state.innerTranscription, props.transcription)) {
      debouncedSetTranscription(state.innerTranscription);
    }
  },
  { deep: true }
);
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
