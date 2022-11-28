<script lang="ts">
import { Vue } from "vue-class-component";

export default class Checkbox extends Vue {}
</script>

<template>
  <label class="checkbox" for="checkbox">
    <input type="checkbox" class="checkbox__input" id="checkbox"/>
  </label>
</template>

<style lang="scss" scoped>
  .checkbox {
    display: grid;
    grid-template-columns: 1em auto;
    gap: 1em;

    &__input {
      appearance: none;
      margin-top: 5px;
      width: 16px;
      height: 16px;
      border: 2px solid #859eff;
      border-radius: 0.15em;
      transform: translateY(-0.075em);
      cursor: pointer;
    }

    &__input:checked {
      appearance: none;
      margin-top: 5px;
      width: 16px;
      height: 16px;
      background-color: #859eff;
      background-image: url(../assets/check-icon.svg);
      background-size: contain;
    }
  }
</style>