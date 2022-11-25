<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    index: Number
  },
})

export default class Item extends Vue {

}
</script>

<template>
  <div class="item">
      <div class="item__header">
          <img src="../assets/person.svg" alt="human face icon" />
        <input v-model="$store.state.transcriptions[index].voice" type="text" class="item__header--title" />
        <button class="item__header--button">
          <img src="../assets/delete.svg" alt="trash icon" />
        </button>
      </div>
      <div class="item__textarea">
        <textarea rows="3" cols="80"
          v-model="$store.state.transcriptions[index].text"
          class="item__textarea--content">
        </textarea>
      </div>
  </div>
</template>

<style lang="scss">
  .item { 
    &__header{
      display: flex;
      align-content: center;
      justify-content: flex-start;

      &--title {
        float: left;
        width: 100%;
        height: auto;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #566074;
        border: none;
        margin-left: 10px;
      }

      &--button {
        margin-left: auto;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }

    &__textarea {
      margin-left: 37px;
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
    }
  }

</style>