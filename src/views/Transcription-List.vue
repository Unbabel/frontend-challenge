<template>
  <div class="item-list-container">
    <Toast />
    <header>
      <NavigationComponent />
    </header>
    <ul class="item-list">
      <li
        class="item-list--item"
        v-for="transcription in transcriptionList"
        v-bind:key="transcription.id"
      >
        <div class="delete-icon">
          <button @click="deleteRow(transcription.id)">
            <svgicon
              class="person-icon"
              name="delete"
              height="1.2rem"
              width="1.2rem"
              :original="true"
            ></svgicon>
          </button>
        </div>
        <div>
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
          <figure>
            <svgicon
              class="person-icon"
              name="person"
              height="1.5rem"
              width="1.5rem"
              :original="true"
            ></svgicon>
          </figure>
        </div>
        <InplaceEditor v-bind:transcriptionInfo="{voice: transcription.voice, text: transcription.text, id: transcription.id}" />
      </li>
    </ul>
    <AddRow />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import NavigationComponent from '../components/Navigation-component/Navigation-component.vue';
import InplaceEditor from '../components/Inplace-editor-component/Inplace-editor-component.vue';
import AddRow from '../components/add-row-component/add-row-component.vue';
import Toast from '../components/toast-component/toast-component.vue';
import { transcription } from '../store/modules/transcriptions';
import { ITranscriptionState } from '../store/types';
import '../components/icons/delete';
import '../components/icons/person';

const namespace: string = 'transcription';

@Component({
  components: {
    NavigationComponent,
    InplaceEditor,
    AddRow,
    Toast
  }
})

export default class TranscriptionList extends Vue {
  @State('transcription') private transcription!: ITranscriptionState;
  @Action('deleteTranscription', { namespace }) private deleteTranscription: any;

  private deleteRow(rowId: number) {
    this.deleteTranscription(rowId);
  }

  get transcriptionList() {
    const transcriptionList =
      this.transcription.transcriptionList &&
      this.transcription.transcriptionList.length > 0
        ? this.transcription.transcriptionList
        : [];

    return transcriptionList;
  }
}
</script>
