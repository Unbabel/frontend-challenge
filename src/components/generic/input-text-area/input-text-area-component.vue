<template>
  <div class="text__area" v-if="textAreaID" data-testid="text__area">
    <label :for="textAreaID" v-if="textAreaID && textAreaLabel" class="input__area__label" data-testid="text__area__label">{{textAreaLabel}}</label>
    <textarea
      :id="textAreaID"
      :name="textAreaID"
      :placeholder="textAreaPlaceholderText"
      v-model="textAreaValue"
      @input.prevent.stop="inputChanged"
      :rows="textAreaRows"
      :cols="textAreaCols"
      class="text__area__input"
      data-testid="text__area__input"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import {onMounted, PropType, ref} from "vue";

const props = defineProps({
  textAreaID: {
    type: String,
    required: false,
    default: () => ''
  },
  textAreaLabel: {
    type: String,
    required: false,
    default: () => ''
  },
  textAreaPlaceholderText: {
    type: String,
    required: false,
    default: () => ''
  },
  textAreaInitialValue: {
    type: String,
    required: false,
    default: () => ''
  },
  changeHandler: {
    type: Function as PropType<(payload: string) => void>,
    required: false,
    default: () => {
      console.warn('using default handler. please update');
    }
  },
  textAreaRows: {
    type: Number,
    required: false,
    default: () => 4
  },
  textAreaCols: {
    type: Number,
    required: false,
    default: () => 6
  },
});

const textAreaValue = ref( props.textAreaInitialValue || '');

function inputChanged(event: Event): void {
  event.preventDefault();
  props.changeHandler(textAreaValue.value);
}

</script>

<style scoped lang="scss">

.text__area {
  .text__area__input {
    resize: none;
    overflow-y: -moz-scrollbars-vertical;
    min-height: 120px;
    height: auto;
    max-height: 260px;
  }

  .text__area__input:focus-visible {
    outline: none;
  }
}

.input__area__label, .text__area__input{
  width: 100%;
  padding: 6px;
  border: none;
}

</style>
