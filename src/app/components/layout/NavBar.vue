<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <h1>Transcriptions</h1>
      <span class="actions">
        <UploadIcon class="icon-button" @click="upload" />
        <FetchIcon class="icon-button" @click="add" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import UploadIcon from '../icons/UploadIcon.vue';
import FetchIcon from '../icons/FetchIcon.vue';

function upload() {
  return true;
}

function add() {
  return true;
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
    width: $main-block-width;
    height: 100%;
    align-items: center;
    margin: auto;
  }
}
</stlye>
