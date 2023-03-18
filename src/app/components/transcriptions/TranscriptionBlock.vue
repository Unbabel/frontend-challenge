<template>
  <div class="transcription-block-wrapper">
    <div class="transcription-block card-block">
      <div v-for="item in transcriptions" :key="item.id">
        <SingleTranscription class="transcription" :transcription="item" />
      </div>
    </div>
    <div class="icon-button" @click="add">
      <AddIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import AddIcon from '../icons/AddIcon.vue';
import SingleTranscription from './SingleTranscription.vue';

const store = useStore();
store.dispatch('loadTranscriptions');

const transcriptions = computed(() => store.getters.transcriptions);

function add() {
  store.commit('createTranscription');
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
