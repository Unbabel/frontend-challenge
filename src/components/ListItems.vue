<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from '../store';

@Options({
  components: {}
})

export default class ListItems extends Vue {
   addTranscriptions = (): void => {
     const item = { id: Date.now(), text: '', voice: '' };
     store.dispatch('addTranscriptions', item);
  }

}
</script>

<template>
  <div class="list">
        <div class="list__item"
          v-for="(transcription, index) in $store.state.transcriptions"
          :key="transcription.id">
          {{transcription + index}}
        </div>
        <div v-if="$store.state.transcriptions.length" class="list__action">
          <button class="list__action--button" @click="addTranscriptions">
            <img src="../assets/add-row.svg" alt="icon with a plus sign" />
          </button>
        </div>
  </div>

</template>


<style lang="scss">
  .list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px 80px;
    background-color: white;

    &__item {
      border: .5px solid rgb(237, 236, 236);
      padding: 15px 15px;
    }

    &__action {
      margin-top: 15px;

      &--button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
</style>