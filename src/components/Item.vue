<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Checkbox from './Checkbox.vue';
import store from '../store';

@Options({
  props: {
    index: Number
  },
  components: { 
    Checkbox
  }
})

export default class Item extends Vue {
   deleteTranscriptions = (index: number): void => {
     store.dispatch('deleteTranscriptions', index);
  }

}
</script>

<template>
  <div class="item">
      <div class="item__header">
        <Checkbox />
        <img src="../assets/person.svg" alt="human face icon" />
        <input v-model="$store.state.transcriptions[index].voice"
         placeholder="transcription voice" type="text" class="item__header--title" />
        <button class="item__header--button" @click="deleteTranscriptions(index)">
          <img src="../assets/delete.svg" alt="trash icon" />
        </button>
      </div>
      <div class="item__textarea">
        <textarea rows="4" cols="80"
          v-model="$store.state.transcriptions[index].text"
          class="item__textarea--content"
          placeholder="transcription text">
        </textarea>
      </div>
  </div>
</template>

<style lang="scss">
  .item { 
    &__header {
      display: flex;
      align-content: center;
      justify-content: flex-start;

      &--title {
        float: left;
        width: 30%;
        height: auto;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #566074;
        border: none;
        margin-left: 10px;
      }

      &--title:hover {
        border: 1px solid #6272b19f;
        border-radius: 5px;
        padding: 3px;
      }

      &--button {
        display: none;
        margin-left: auto;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }

    &__textarea {
      margin-left: 70px;
      float: left;

      &--content {
        float: left;
        width: 95%;
        height: auto;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        resize: none;
        border: none;
        color: #778195;
      }

      &--content:hover {
        border: 1px solid #6272b19f;
        border-radius: 5px;
        padding: 4px;
      }
    }
  }

  .item:hover > .item__header >.item__header--button {
    display: block;
  }
</style>