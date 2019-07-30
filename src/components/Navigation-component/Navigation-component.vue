<template>
  <nav class="navigation">
    <div class="navigation--wrapper">
      <h2 class="navigation--app-title">Transcription</h2>
      <ul class="navigation--buttons">
        <li>
          <button class="upload-data navigation--buttons--button">
            <svgicon name="upload" height="1.5rem" width="1.5rem" :original="true"></svgicon>
          </button>
          <svgicon v-if="isLoading" name="loading" height="1.5rem" width="1.5rem" :original="true"></svgicon>
        </li>
        <li>
          <button class="fetch-data" @click="getData()">
            <svgicon name="fetch-document" height="1.5rem" width="1.5rem" :original="true"></svgicon>
          </button>
          <svgicon v-if="isUploading" name="loading" height="1.5rem" width="1.5rem" :original="true"></svgicon>
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
import '../icons/loading';
import {actions} from '../../store/actions/transcription-actions';
const namespace: string = 'transcription';

@Component
export default class NavigationComponent extends Vue {
  private isLoading: boolean = false;
  private isUploading: boolean = false;

  @Action('fetchData', { namespace }) private fetchData: any;

  private getData() {
    this.fetchData();
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
