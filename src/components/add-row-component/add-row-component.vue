<template>
  <div class="add-row">
    <button @click="getRow()">
      <svgicon name="add-row" height="1.7rem" width="1.7rem" :original="true"></svgicon>
    </button>
    <h3 v-if="isItemListValid" class="warning-message">Please fill the already created transcription</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import '../icons/add-row';

const namespace: string = 'transcription';

@Component
export default class AddRow extends Vue {
  @Action('addTranscription', { namespace }) private addTranscription: any;

  private isItemListValid: boolean = false;

  private getRow() {
    this.addTranscription();
  }
}
</script>

<style lang="scss">
.add-row {
  width: fit-content;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

