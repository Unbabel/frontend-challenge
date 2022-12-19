<script setup lang="ts">
import type { PropType } from 'vue'
import type { Transcription } from '@/types/transcription'
import AtomCheckbox from '@/components/lib/AtomCheckbox.vue'
import PersonIcon from '@/assets/icons/person.svg?component'
import TrashIcon from '@/assets/icons/delete.svg?component'
import { useTranscriptionsStore } from '@/composables/transcriptions'

defineProps({
  transcription: {
    type: Object as PropType<Transcription>,
    required: true,
  },
})

const { removeTranscriptionById } = useTranscriptionsStore()
</script>

<template>
  <div class="transcription-item">
    <div class="transcription-item__row">
      <AtomCheckbox class="transcription-item__checkbox" />
      <PersonIcon class="transcription-item__icon" />
      <div class="transcription-item__content">
        <div class="transcription-item__wrapper">
          <h2 class="transcription-item__title montserrat-font-family">
            {{ transcription.voice }}
          </h2>
          <p class="transcription-item__description">
            {{ transcription.text }}
          </p>
        </div>
      </div>
    </div>
    <button
      class="transcription-item__button button"
      @click="removeTranscriptionById(transcription.id)"
    >
      <TrashIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.transcription-item {
  display: block;
  padding: 20px;
  background-color: var(--color-white);
  position: relative;

  &__button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: none;
  }

  @media (hover: hover) {
    &:hover &__button {
      display: block;
    }
  }

  @media (hover: none) {
    &__button {
      display: block;
    }
  }

  &__row {
    display: flex;
  }

  &__wrapper {
    display: block;
  }

  &__content {
    flex-grow: 1;
    padding-right: 1.5rem;
  }

  &__checkbox,
  &__icon {
    flex-shrink: 0;
  }

  &__checkbox {
    margin-top: 0.3rem;
    margin-right: 1rem;
  }

  &__icon {
    margin-right: 0.6rem;
  }

  &__title {
    font-weight: 600;
    color: var(--color-gray-2);
    font-size: 16px;
  }

  &__description {
    font-weight: 400;
    color: var(--color-gray-3);
    font-size: 16px;
  }
}
</style>
