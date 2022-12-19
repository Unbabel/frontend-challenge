<script setup lang="ts">
import UploadIcon from '@/assets/icons/upload.svg?component'
import FetchDocumentIcon from '@/assets/icons/fetch-document.svg?component'
import { useTranscriptionsStore } from '@/composables/useTranscriptionsStore'

const { fetchTranscriptions, uploadTranscriptions } = useTranscriptionsStore()
</script>

<template>
  <header class="template-header">
    <div class="container">
      <div class="template-header__content content">
        <h1 class="template-header__title montserrat-font-family">
          Transcriptions
        </h1>
        <div class="template-header__buttons">
          <button class="button" data-cy="upload-button" @click="uploadTranscriptions">
            <UploadIcon />
          </button>

          <button class="button" data-cy="fetch-button" @click="fetchTranscriptions">
            <FetchDocumentIcon />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.template-header {
  box-shadow: rgba(17, 17, 26, 0.2) 0px 2px 0px;
  background-color: #fff;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: var(--color-gray-1);
    font-size: 1rem;
  }

  &__buttons {
    display: flex;
  }

  &__buttons > .button:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
