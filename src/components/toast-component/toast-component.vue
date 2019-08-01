<template>
  <div v-if="transcriptionErrors && transcriptionErrors.length">
    <section class="toast" v-for="error in transcriptionErrors" v-bind:key="error">
      <h3 class="toast-error--title">Error</h3>
      <p class="toast-error--description">{{error}}</p>
    </section>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class';
  import { ITranscriptionState } from '../../store/types';

  @Component
  export default class Toast extends Vue {
    @State('transcription') private transcription!: ITranscriptionState;

    get transcriptionErrors() {
      const transcriptionErrors = this.transcription.errors;

      return transcriptionErrors;
    }
  }
</script>
