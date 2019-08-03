<template>
  <div class="add-row">
    <button class="add-row-button" @click="addTranscription">
      <svgicon name="add-row" height="1.7rem" width="1.7rem" :original="true"></svgicon>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import '../icons/add-row';
import { ITranscriptionState } from '../../store/types';
import SvgIcon from 'vue-svgicon';

const namespace: string = 'transcription';

@Component({
  components: {
    svgicon: SvgIcon
  }
})
export default class AddRow extends Vue {
  @Action('addTranscription', { namespace }) private addTranscription: any;
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

