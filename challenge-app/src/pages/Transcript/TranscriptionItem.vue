<template>
  <div
    class="transcription-item"
    @mouseenter="showDeleteButton = true"
    @mouseleave="showDeleteButton = false"
  >
    <div class="transcription-item-checkbox">
      <Checkbox v-model:checked="checked" />
    </div>
    <div class="transcription-item-content">
      <div class="transcription-item-content-icon">
        <Icon icon="person" />
      </div>
      <div
        role="textbox"
        contenteditable
        class="transcription-item-content-voice"
        @input="emit('update:voice', $event.target.outerText)"
      >
        {{ voice }}
      </div>
      <div
        role="textbox"
        contenteditable
        aria-multiline="true"
        class="transcription-item-content-text"
        @input="emit('update:text', $event.target.outerText)"
      >
        {{ text }}
      </div>
    </div>
    <Button v-if="showDeleteButton" icon="delete" @click="emit('delete')" />
  </div>
</template>

<script setup>
import { toRefs, ref } from "vue";
import Checkbox from "#app/components/Checkbox.vue";
import Icon from "#app/components/Icon.vue";
import Button from "#app/components/Button.vue";

const props = defineProps({
  voice: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    default: ""
  }
});

const { voice, text } = toRefs(props);

const emit = defineEmits(["update:voice", "update:text", "delete"]);

const checked = ref(false);
const showDeleteButton = ref(false);
</script>

<style scoped lang="scss">
.transcription-item {
  padding: $gap_primary;
  display: grid;
  grid-template-columns: 16px 1fr 16px;
  grid-column-gap: 16px;
  align-items: start;
  &-checkbox {
    padding-top: 4px;
  }
  &-content {
    display: grid;
    position: relative;
    grid-template-columns: 26px 1fr;
    grid-gap: 8px;
    &-icon {
      grid-row: 1 / span 2;
    }
    &-voice {
      @include item_title;
      @include input_text;
      padding-top: 4px;
    }
    &-text {
      @include item_content;
      @include input_text;
    }
  }
}
</style>
