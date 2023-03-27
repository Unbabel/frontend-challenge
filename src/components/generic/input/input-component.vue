<template>
<div class="input__text" v-if="inputID" data-testid="input__text">
  <label :for="inputID" v-if="inputID && inputLabel" class="input__text__label" data-testid="input__text__label">{{inputLabel}}</label>
  <input
    :id="inputID"
    type="text"
    v-model="inputValue"
    :placeholder="placeHolderText"
    @input.prevent.stop="inputChanged"
    data-testid="input__text__input"
    class="input__text__input"
  />
</div>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";

const props = defineProps({
  inputID: {
    type: String,
    required: false,
    default: () => ''
  },
  inputLabel: {
    type: String,
    required: false,
    default: () => ''
  },
  inputInitialValue: {
    type: String,
    required: false,
    default: () => ''
  },
  placeHolderText: {
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
  }
});

const inputValue = ref(props.inputInitialValue || '');

function inputChanged(event: Event): void {
  event.preventDefault();
  props.changeHandler(inputValue.value);
}

</script>

<style scoped lang="scss">
.input__text{

  .input__text__input{
    border: none;
  }

  .input__text__input:focus-visible{
    outline: none;
  }
}

.input__text__label, .input__text__input {
  width: 100%;
  padding: 6px;
}

</style>
