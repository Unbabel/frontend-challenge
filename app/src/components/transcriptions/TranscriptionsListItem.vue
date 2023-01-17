<script setup>
import TranscriptionReadModel from "@/models/TranscriptionReadModel";
import AppIcon from "@/components/base/AppIcon.vue";

const props = defineProps({
  transcription: {
    type: TranscriptionReadModel,
    required: true,
  },
});
</script>

<template>
  <li class="transcription-list-item padding-all">
    <div>
      <input type="checkbox" />
    </div>
    <div>
      <AppIcon icon-name="person"></AppIcon>
    </div>
    <div>
      <p class="list-item-title">{{ props.transcription.Voice }}</p>
    </div>
    <div>
      <AppIcon class="on-hover-icon" icon-name="delete"></AppIcon>
    </div>
    <p class="list-item-text">{{ props.transcription.Text }}</p>
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
  }

  .on-hover-icon {
    opacity: 0;
  }

  &:hover .on-hover-icon {
    opacity: 1;
  }
}
</style>
