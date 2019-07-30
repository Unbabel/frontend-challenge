<template>
  <div class="item-list-container">
    <header>
      <NavigationComponent />
    </header>
    <ul class="item-list">
      <li
        class="item-list--item"
        v-for="transcription in transcriptionList"
        :key="transcription.id"
      >
        <div class="delete-icon">
          <button>
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
        <InplaceEditor v-bind:transcriptionInfo="{voice: transcription.voice, text: transcription.text}" />
      </li>
    </ul>
    <div class="add-row">
      <button>
        <svgicon name="add-row" height="1.7rem" width="1.7rem" :original="true"></svgicon>
      </button>
      <h3 v-if="isItemListValid" class="warning-message">
        Please fill the already created transcription
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import NavigationComponent from '../components/Navigation-component/Navigation-component.vue';
import InplaceEditor from '../components/Inplace-editor-component/Inplace-editor-component.vue';
import { transcription } from '../store/modules/transcriptions';
import { ITranscriptionState } from '../store/types';
import '../components/icons/delete';
import '../components/icons/person';
import '../components/icons/add-row';

@Component({
  components: {
    NavigationComponent,
    InplaceEditor
  }
})
export default class TranscriptionList extends Vue {
  @State('transcription') private transcription!: ITranscriptionState;

  private isItemListValid: boolean = false;

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

