<template>
  <transition name="fade">
    <div class="toast" v-if="transcriptionErrors && transcriptionErrors.length">
      <section class="toast-error" v-for="(error, index) in transcriptionErrors" v-bind:key="index">
        <button class="toast-error--dismiss" @click="dismissToast(index)"> X </button>
        <h3 class="toast-error--title">Error</h3>
        <p
          class="toast-error--description"
        >{{error || "An unexpected error occurred please refresh the page"}}</p>
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { ITranscriptionState } from '../../store/types';

const namespace: string = 'transcription';

@Component
export default class Toast extends Vue {
  @State('transcription') private transcription!: ITranscriptionState;
  @Action('dismissError', { namespace }) private dismissError: any;

  private showToast: boolean = false;

  private dismissToast(index: number) {
    this.dismissError(index);
  }

  get transcriptionErrors() {
    const transcriptionErrors = this.transcription.errors;

    return transcriptionErrors;
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

