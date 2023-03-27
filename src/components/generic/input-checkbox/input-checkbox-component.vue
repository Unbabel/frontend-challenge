<template>
  <div class="checkbox" v-if="checkBoxID" data-testid="checkbox">
    <label :for="checkBoxID" v-if="checkBoxID && checkBoxLabel" class="checkbox__label" data-testid="checkbox__label">{{checkBoxLabel}}</label>
    <input
        :id="checkBoxID"
        type="checkbox"
        v-model="inputCheckedValue"
        :value="inputCheckedValue"
        :placeholder="placeHolderText"
        @change.prevent.stop="inputChanged"
        data-testid="checkbox__input"
        class="checkbox__input"
    />
    <span class="checkbox__input__checkmark" data-testid="checkbox__input__checkmark"></span>
  </div>

</template>

<script setup lang="ts">
import {PropType, ref} from "vue";
const inputCheckedValue = ref(false);

const props = defineProps({
  checkBoxID: {
    type: String,
    required: false,
    default: () => ''
  },
  placeHolderText: {
    type: String,
    required: false,
    default: () => ''
  },
  checkBoxLabel: {
    type: String,
    required: false,
    default: () => ''
  },
  changeHandler: {
    type: Function as PropType<(payload: boolean) => void>,
    required: false,
    default: () => {
      console.warn('using default handler. please update');
    }
  }
});

function inputChanged(event: Event): void {
  event.preventDefault();
  props.changeHandler(inputCheckedValue.value);
}


</script>

<style scoped lang="scss">
.checkbox{
  --fontSize: 22px;
  --checkboxSize: 16px;
  --checkboxColor: #859EFF;
  --whiteBackgroundColor: white;
  --checkboxBorderWidth: 2px;
  --checkboxDisabledColor: #959495;

  .checkbox__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    height: var(--checkboxSize);
    width: var(--checkboxSize);
    border: var(--checkboxBorderWidth) solid var(--checkboxColor);
    border-radius: var(--checkboxBorderWidth);
    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--checkboxColor);
      transform-origin: center;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
      transform: scale(1);
    }

    &:disabled {
      color: var(--checkboxDisabledColor);
      cursor: not-allowed;
    }
  }


}

/*
.checkbox {

  --fontSize: 22px;
  --checkboxSize: 16px;
  --checkboxColor: #859EFF;
  --whiteBackgroundColor: white;
  --checkboxBorderWidth: 2px;

  display: block;
  position: relative;
  cursor: pointer;
  height: var(--checkboxSize);
  width: var(--checkboxSize);
  font-size: var(--fontSize);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .checkbox__input {
    position: absolute;
    height: var(--checkboxSize);
    width: var(--checkboxSize);
    cursor: pointer;
    opacity: 0;
    left: 0;
  }

  .checkbox__input__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: var(--checkboxSize);
    width: var(--checkboxSize);
    background-color: var(--whiteBackgroundColor);
    border: var(--checkboxBorderWidth) solid var(--checkboxColor);
    border-radius: var(--checkboxBorderWidth);
  }

  .checkbox__input__checkmark::after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 0;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .checkbox__input:checked {
    ~ .checkbox__input__checkmark {
      background-color: var(--checkboxColor);
    }
    ~ .checkbox__input__checkmark::after {
      display: block;
    }
  }

}*/


</style>
