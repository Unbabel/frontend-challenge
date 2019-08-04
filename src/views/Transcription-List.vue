<template>
  <div class="item-list-container">
    <Toast v-bind:errorList="errorList" />
    <header>
      <NavigationComponent />
    </header>
    <ItemsList v-bind:transcriptionList="transcriptionList" />
    <AddRow />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import NavigationComponent from '@/components/Navigation-component/Navigation-component.vue';
import AddRow from '@/components/add-row-component/add-row-component.vue';
import Toast from '@/components/toast-component/toast-component.vue';
import ItemsList from '@/components/items-list-component/items-list-component.vue';
import { transcription } from '../store/modules/transcriptions';
import { ITranscriptionState } from '../store/types';

@Component({
  components: {
    NavigationComponent,
    AddRow,
    ItemsList,
    Toast
  }
})
export default class TranscriptionList extends Vue {
  @State('transcription') private transcription!: ITranscriptionState;

  get transcriptionList() {
    const transcriptionList =
      this.transcription.transcriptionList &&
      this.transcription.transcriptionList.length > 0
        ? this.transcription.transcriptionList
        : [];

    return transcriptionList;
  }

  get errorList() {
    const errorList =
      this.transcription.errors && this.transcription.errors.length > 0
        ? this.transcription.errors
        : [];

    return errorList;
  }
}
</script>
