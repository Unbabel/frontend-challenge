<script setup>
import TranscriptionReadModel from "@/models/TranscriptionReadModel";
import AppIcon from "@/components/base/AppIcon.vue";
import AppCheckbox from "../base/AppCheckbox.vue";
import { computed } from "vue";
import AppInput from "../base/AppInput.vue";

const props = defineProps({
  transcription: {
    type: TranscriptionReadModel,
    required: true,
  },
});

const emit = defineEmits(["select", "delete", "update"]);

const isSelected = computed({
  get: () => props.transcription.IsSelected,
  set: () => emit("select", props.transcription), // could call store, but prefer this logic to be on a higher view level component
});

const handleVoiceInputChange = ($voiceInputValue) => {
  if ($voiceInputValue === props.transcription.Voice) return;
  emit("update", { voice: $voiceInputValue });
};
const handleTextInputChange = ($focusOutEvent) => {
  const text = $focusOutEvent.target.innerText;
  if (text === props.transcription.Text) return;
  emit("update", { text });
};
</script>

<template>
  <li class="transcription-list-item padding-all">
    <div>
      <AppCheckbox v-model="isSelected"></AppCheckbox>
    </div>
    <div>
      <AppIcon icon-name="person"></AppIcon>
    </div>
    <AppInput
      class="list-item-title"
      placeholder="Add voice..."
      :value="props.transcription.Voice"
      @change="handleVoiceInputChange"
    ></AppInput>
    <div>
      <AppIcon
        class="on-hover-icon"
        icon-name="delete"
        button
        @click="emit('delete', props.transcription)"
      ></AppIcon>
    </div>
    <div
      class="list-item-text"
      contenteditable
      placeholder="Add text..."
      v-text="props.transcription.Text"
      @focusout="handleTextInputChange"
    ></div>
  </li>
</template>

<style lang="scss" scoped>
$list-item-border-radius: 2px;
.transcription-list-item {
  border: 1px solid #f2f2f2;
  background-color: white;
  margin: -1px 0; // overlapped borders

  display: grid;
  grid-gap: 0 8px;
  grid-template-columns: min-content min-content auto min-content;
  align-items: center;

  &:first-child {
    border-radius: $list-item-border-radius $list-item-border-radius 0 0;
  }
  &:last-child {
    border-radius: 0 0 $list-item-border-radius $list-item-border-radius;
  }

  .list-item-text {
    grid-column: 3 / 4;
    outline: 0;
    cursor: text;
    border-radius: 5px;

    &:empty:before {
      content: attr(placeholder);
      font-style: italic;
      opacity: 0.5;
    }
  }

  .on-hover-icon {
    opacity: 0;
  }

  &:hover .on-hover-icon {
    opacity: 1;
  }
}
</style>
