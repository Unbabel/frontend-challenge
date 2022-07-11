<template>
  <div class="transcript">
    <Header>
      <template #content>
        <div class="transcript-header">
          <h2 class="transcript-title">Transcriptions</h2>
          <Button icon="upload" @click="postTranscriptions()" />
          <Button icon="fetch-document" @click="fetchTranscriptions()" />
        </div>
      </template>
    </Header>
    <div v-if="transcriptionsList.length" class="transcript-list">
      <TranscriptionItem
        v-for="item in transcriptionsList"
        :key="item.id"
        v-model:voice="item.voice"
        v-model:text="item.text"
        @delete="handleDelete(item.id)"
      />
    </div>
    <div class="transcript-button">
      <Button class="transcript-button" icon="add-row" @click="addRow()" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, unref } from "vue";

import Header from "#app/layout/Header.vue";
import Button from "#app/components/Button.vue";
import TranscriptionItem from "./TranscriptionItem.vue";

import { v4 as uuid } from "uuid";

const store = useStore();

const transcriptionsList = computed(() => store.getters["transcription/getList"]);

const fetchTranscriptions = async () => {
  await store.dispatch("transcription/fetchList");
};

const handleDelete = (id) => {
  store.commit("transcription/removeItemFromList", id);
};

const addRow = () => {
  store.commit("transcription/addItemToList", {
    id: uuid(),
    voice: "",
    text: ""
  });
};

const postTranscriptions = () => {
  store.dispatch("transcription/postList", unref(transcriptionsList.value));
};
</script>

<style lang="scss">
.transcript {
  @extend .layout;

  &-header {
    display: grid;
    grid-template-columns: 1fr repeat(2, $gap_primary);
    grid-column-gap: $gap_primary;
  }
  &-title {
    @include app_title;
  }
  &-list {
    @extend .wrapper;
    background: $white;
    border: $border;
    margin-top: $gap_primary;
    margin-bottom: $gap_primary;
  }
  &-button {
    width: 32px;
    height: 32px;
    margin: $gap_primary auto;
  }
}
</style>
