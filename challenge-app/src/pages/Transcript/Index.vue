<template>
  <div class="transcript">
    <Header>
      <template #content>
        <div class="transcript-header">
          <h2 class="transcript-title">
            Transcriptions
          </h2>
          <Button
              icon="upload"
          />
          <Button
              icon="fetch-document"
              @click="fetchTranscriptions()"
          />
        </div>
      </template>
    </Header>

  </div>

</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
// UI
import Header from "#app/layout/Header.vue";
import Button from "#app/components/Button.vue";


const store = useStore();

const transcriptionsList = computed(() => store.getters["transcription/getList"]);

const fetchTranscriptions = async () => {
  await store.dispatch("transcription/fetchList");
}

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
}
</style>
