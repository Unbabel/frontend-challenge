<template>
  <IconButtonComponent
    :iconButtonID="'transcriptionAddButton'"
    :iconButtonIcon="transcriptionAddButtonIcon"
    :iconButtonPlaceholderText="'+'"
    :clickHandler="() => Eventbus.emit(TranscriptionEventTypeConstants.ADD_NEW_TRANSCRIPTION)"
    class="transcription__add__button"
    data-testid="transcription__add__button"
  />
</template>

<script setup lang="ts">
import IconButtonComponent from "../generic/icon-button/icon-button-component.vue";
import Eventbus from '../../eventbus';
import {
  TranscriptionEventTypeConstants
} from "../../integration/transcriptions/business/constants/transcription-event-type.constants";

defineProps({
  transcriptionAddButtonIcon: {
    type: String,
    required: false,
    default: () => ''
  }
});

</script>

<style scoped lang="scss">
.transcription__add__button {

  :deep(.icon__button__no-image__placeholder) {
    display: block;
    background-color: lightgray;
    border-radius: 50%;
    border: 2px solid lightgray;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: white;
  }

}

</style>
