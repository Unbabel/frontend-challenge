<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from '../store';
import Item from "./Item.vue";

@Options({
  components: {
    Item
  }
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
    <TransitionGroup name="fade">
      <div class="list__item"
          v-for="(transcription, index) in $store.state.transcriptions"
          :key="transcription.id">
          <Item :index="index"/>
      </div>
    </TransitionGroup>
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
    margin: 10px auto;
    background-color: white;
    max-width: 45rem;

    &__item {
      border: 1px solid rgb(228, 227, 227);
      padding: 15px 15px 0px 15px;
    }

    &__action {
      padding-top: 15px;
      background-color: #f0f3f3;

      &--button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-active {
  position: absolute;
}
</style>