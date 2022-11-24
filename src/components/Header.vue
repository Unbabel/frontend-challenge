<script Lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {

}
</script>

<template>
  <header class="header">
    <h1>Transcriptions</h1>
    <div class="header__options">
      <button class="header__options--button">
        <img src="../assets/upload.svg" alt="arrow icon pointing up" />
      </button>
      <button class="header__options--button">
        <img src="../assets/fetch-document.svg" alt="icon with a plus sign" />
      </button>
    </div>
  </header>
</template>


<style lang="scss">
 .header {
    display: flex;
    justify-content: space-between;
    padding: 0px 100px;
    align-items: center;
    background-color: #fff;
    border-bottom: 2px solid #c7c7c7;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;

    &__options {
    display: flex;
    width: 6rem;
    gap: 1rem;

    &--button {
      border: none;
      cursor: pointer;
      background: transparent;
    }
  }
}
</style>