<template>
  <button
      v-if="iconButtonID"
      type="button"
      :id="iconButtonID"
      class="icon__button"
      data-testid="icon__button"
      @click.prevent.stop="handleClick"
  ><img
      v-if="iconButtonIcon"
      :src="iconButtonIcon"
      alt="button-icon"
      class="icon__button__image"
      data-testid="icon__button__image"
  /><span
      v-if="!iconButtonIcon"
      class="icon__button__no-image__placeholder"
      data-testid="icon__button__no-image__placeholder">{{iconButtonPlaceholderText}}</span></button>
</template>

<script setup lang="ts">
import {PropType} from "vue";

const props = defineProps({
  iconButtonID: {
    type: String,
    required: false,
    default: () => ''
  },
  iconButtonIcon: {
    type: String,
    required: false,
    default: () => ''
  },
  iconButtonPlaceholderText: {
    type: String,
    required: false,
    default: () => 'default placeholder text'
  },
  clickHandler: {
    type: Function as PropType<() => void>,
    required: false,
    default: () => {
      console.warn('using default handler. please update');
    }
  }
});

function handleClick(event: Event): void {
  event.preventDefault();
  props.clickHandler();
}

</script>

<style scoped lang="scss">
.icon__button {
  display: block;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  background: none;
}
</style>
