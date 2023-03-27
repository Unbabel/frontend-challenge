<template>
  <div class="transcription__item" data-testid="transcription__item" v-if="transcription.id">

    <div class="transcription__item__checkbox" data-testid="transcription__item__checkbox">
      <InputCheckboxComponent :checkBoxID="`checkbox-${transcription.id}`"/>
    </div>

    <div class="transcription__item__icon" data-testid="transcription__item__icon">
      <img v-if="transcriptionIcon"
           :src="transcriptionIcon"
           alt="transcription-item-icon-image"
           class="transcription__item__icon__image"
           data-testid="transcription__item__icon__image"/>
    </div>

    <div class="transcription__item__inputs" data-testid="transcription__item__inputs">

      <div class="transcription__item_title" data-testid="transcription__item_title">
        <InputComponent :inputID="`input--${transcription.id}`"
                        :inputInitialValue="transcription.voice"
                        :placeHolderText="'please insert transcription voice title - to be updated'"
                        :changeHandler="handleVoiceTitleChange" />
      </div>

      <div class="transcription__item_text" data-testid="transcription__item_text">
        <InputTextAreaComponent :textAreaID="`textarea-${transcription.id}`"
                                :textAreaInitialValue="transcription.text"
                                :textAreaPlaceholderText="'please insert transcription text - to be updated'"
                                :changeHandler="handleVoiceTextChange" />
      </div>

    </div>

    <div class="transcription__item__options" data-testid="transcription__item__options">

      <IconButtonComponent
          :iconButtonID="`transcriptionRemoveButton-${transcription.id}`"
          :iconButtonIcon="transcriptionDeleteButtonIcon"
          :iconButtonPlaceholderText="'-'"
          :clickHandler="() => Eventbus.emit(TranscriptionEventTypeConstants.DELETE_TRANSCRIPTION, transcription.id)"
          class="transcription__delete__button"
          data-testid="transcription__delete__button"
          title="Delete transcription"
      />

    </div>

  </div>
</template>

<script setup lang="ts">
import InputCheckboxComponent from "../generic/input-checkbox/input-checkbox-component.vue";
import InputComponent from "../generic/input/input-component.vue";
import InputTextAreaComponent from "../generic/input-text-area/input-text-area-component.vue";
import type {TranscriptionDTO} from "../../integration/transcriptions/business/dto/transcription.dto";
import {PropType} from "vue";
import IconButtonComponent from "../generic/icon-button/icon-button-component.vue";
import Eventbus from '../../eventbus';
import {
  TranscriptionEventTypeConstants
} from "../../integration/transcriptions/business/constants/transcription-event-type.constants";

const props = defineProps({
  transcription: {
    type: Object as PropType<TranscriptionDTO>,
    required: false,
    default: () => <TranscriptionDTO>{}
  },
  transcriptionIcon: {
    type: String,
    required: false,
    default: () => ''
  },
  transcriptionDeleteButtonIcon: {
    type: String,
    required: false,
    default: () => ''
  }
});

const originalVoiceTitle = props.transcription.voice;
const originalText = props.transcription.text;

function handleVoiceTitleChange(transcriptionVoiceTitle: string): void {
  props.transcription.isEdited = originalVoiceTitle.trim() !== transcriptionVoiceTitle.trim();
  props.transcription.voice = transcriptionVoiceTitle;
}

function handleVoiceTextChange(transcriptionText: string): void {
  props.transcription.isEdited = originalText.trim() !== transcriptionText.trim();
  props.transcription.text = transcriptionText;
}

</script>

<style scoped lang="scss">
.transcription__item {
  display: flex;
  overflow: hidden;
  padding: 10px 20px;
  animation: fade-in .5s;

  .transcription__item__inputs {
    flex-grow: 2;
  }

  .transcription__item__options {

    :deep(.transcription__delete__button) {
      display: block;
      width: 16px;
      height: 20px;
      line-height: 5px;
      color: white;
      opacity: 0;
      transition: opacity .5s;
    }
  }

  &:hover {
    .transcription__item__options {
      :deep(.transcription__delete__button) {
        opacity: 1;
      }
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

</style>
