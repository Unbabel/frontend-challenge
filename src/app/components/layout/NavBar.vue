<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <h1>Transcriptions</h1>
      <span class="actions">
        <UploadIcon class="icon-button upload" @click="upload" />
        <FetchIcon class="icon-button fetch" @click="fetchData" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Navbar Component
 *
 * Will display a navbar that can:
 *  - Upload current mutated information
 *  - Re-download all the displayed information from the API
 *
 */
import UploadIcon from '../icons/UploadIcon.vue';
import FetchIcon from '../icons/FetchIcon.vue';
import { useStore } from 'vuex';
import { TrancriptionActions } from '@/app/store/transcriptionModule';

const store = useStore();

function upload() {
  store.dispatch(TrancriptionActions.UPLOAD_TRASNCRIPTIONS);
}

function fetchData() {
  store.dispatch(TrancriptionActions.LOAD_TRANSCRIPTIONS);
}
</script>

<stlye lang="scss" scoped>
.navbar-wrapper {
  height: $navbar-height;
  box-shadow: 0px 1px 8px $grey-shadow;
  background-color: $white;

  .navbar {
    display: grid;
    grid-template-columns: 1fr max-content;
    max-width: $main-block-width;
    height: 100%;
    align-items: center;
    margin: auto;

    @media screen and (max-width: $main-block-width) {
      width: 90%;
    }
  }
}
</stlye>
