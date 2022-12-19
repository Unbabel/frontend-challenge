<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { PropType } from 'vue'
import type { Transcription } from '@/types/transcription'
import AtomCheckbox from '@/components/lib/AtomCheckbox.vue'
import PersonIcon from '@/assets/icons/person.svg?component'
import TrashIcon from '@/assets/icons/delete.svg?component'
import { useTranscriptionsStore } from '@/composables/transcriptions'
import { UpdateField } from '@/models/TranscriptionsModel'

const props = defineProps({
  transcription: {
    type: Object as PropType<Transcription>,
    required: true,
  },
})

const { removeTranscriptionById, updateTranscriptionById } = useTranscriptionsStore()

const isTitleEditing = ref(false)
const isDescriptionEditing = ref(false)
const newTitle = ref('')
const newDescription = ref('')
const inputTitle = ref()
const textareaDescription = ref()

const activateEditTitle = () => {
  isTitleEditing.value = true
  newTitle.value = props.transcription.voice
  nextTick(() => {
    inputTitle.value?.focus()
  })
}
const activateEditDescription = () => {
  isDescriptionEditing.value = true
  newDescription.value = props.transcription.text
  nextTick(() => {
    textareaDescription.value?.focus()
  })
}
const saveTitle = () => {
  updateTranscriptionById(props.transcription.id, UpdateField.Voice, newTitle.value)
  isTitleEditing.value = false
}
const saveDescription = () => {
  updateTranscriptionById(props.transcription.id, UpdateField.Text, newDescription.value)
  isDescriptionEditing.value = false
}
const handleDescriptionEnter = (e: KeyboardEvent) => {
  if (e.shiftKey || e.ctrlKey) {
    newDescription.value += '\n'
  } else {
    saveDescription()
  }
}
</script>

<template>
  <div class="transcription-item">
    <div class="transcription-item__row">
      <AtomCheckbox class="transcription-item__checkbox" />
      <PersonIcon class="transcription-item__icon" />

      <div class="transcription-item__content">
        <div class="transcription-item__wrapper">
          <h2
            v-if="!isTitleEditing"
            class="transcription-item__title montserrat-font-family"
            @click="activateEditTitle"
          >
            {{ transcription.voice }}
          </h2>
          <input
            v-else
            ref="inputTitle"
            v-model="newTitle"
            class="transcription-item__title-editor montserrat-font-family"
            @blur="saveTitle"
            @keydown.enter="saveTitle"
          >

          <p
            v-if="!isDescriptionEditing"
            class="transcription-item__description opensans-font-family"
            @click="activateEditDescription"
          >
            {{ transcription.text }}
          </p>
          <textarea
            v-else
            ref="textareaDescription"
            v-model="newDescription"
            rows="5"
            class="transcription-item__description-editor opensans-font-family"
            @keydown.enter="handleDescriptionEnter"
            @blur="saveDescription"
          />
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
    top: 0.8rem;
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

  &__title:hover,
  &__description:hover {
    background-color: var(--color-background);
    cursor: text;
  }

  &__description {
    font-weight: 400;
    color: var(--color-gray-3);
    font-size: 16px;
  }

  &__title-editor {
    width: 100%;
    color: var(--color-gray-2);
    font-size: 16px;
  }

  &__description-editor {
    width: 100%;
    color: var(--color-gray-3);
    font-size: 16px;
  }
}
</style>
