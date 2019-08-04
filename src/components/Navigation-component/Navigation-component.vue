<template>
  <nav aria-label="Data upload and obtention buttons" class="navigation">
    <div class="navigation--wrapper">
      <h2 class="navigation--app-title">Transcription</h2>
      <ul role="toolbar" class="navigation--buttons">
        <li tabindex="1">
          <button
            aria-setsize="2"
            aria-posinset="1"
            aria-pressed="false"
            role="button"
            class="upload-transcriptions navigation--buttons--button"
            @click="uploadData()"
          >
            <svgicon name="upload" height="1.5rem" width="1.5rem" :original="true"></svgicon>
          </button>
        </li>
        <li tabindex="2">
          <button
            aria-setsize="2"
            aria-posinset="1"
            aria-pressed="false"
            role="button"
            class="get-transcriptions"
            @click="getData()"
          >
            <svgicon name="fetch-document" height="1.5rem" width="1.5rem" :original="true"></svgicon>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import '../icons/upload';
import '../icons/fetch-document';
import { actions } from '../../store/actions/transcription-actions';
import { ITranscriptionState, ITranscription } from '../../store/types';
import SvgIcon from 'vue-svgicon';
const namespace: string = 'transcription';

@Component({
  components: {
    svgicon: SvgIcon
  }
})
export default class NavigationComponent extends Vue {
  private isLoading: boolean = false;
  private isUploading: boolean = false;

  @State('transcription') private transcription!: ITranscriptionState;
  @Action('getTranscriptions', { namespace }) private getTranscriptions: any;
  @Action('uploadTranscriptions', { namespace })
  private uploadTranscriptions: any;

  get transcriptionList() {
    const transcriptionList =
      this.transcription.transcriptionList &&
      this.transcription.transcriptionList.length > 0
        ? this.transcription.transcriptionList
        : [];

    return transcriptionList;
  }

  private getData() {
    this.getTranscriptions();
  }

  private uploadData() {
    this.uploadTranscriptions(this.transcriptionList);
  }
}
</script>

<style lang="scss">
@import "../../styles/index.scss";
@import "../../styles/Tools/tools";

.navigation {
  display: flex;
  align-items: center;
  background-color: colormapper($color-map, white);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 69px;
  width: 100%;

  &--wrapper {
    padding: 15px;
    width: 992px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  &--app-title {
    font-weight: 600;
    font-size: #{$title-font-size};
    color: colormapper($color-map, app-title-color);
    cursor: default;
  }

  &--buttons {
    display: flex;
    flex-direction: row;
    align-items: center;

    .loading {
      color: colormapper($color-map, item-text-color);
      margin-right: 15px;
    }

    &--button:first-child {
      margin-right: 15px;
    }
  }
}
</style>
