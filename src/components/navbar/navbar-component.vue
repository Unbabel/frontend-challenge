<template>
  <nav class="navbar" data-testid="navbar">
    <div class="navbar__inner__container" data-testid="navbar__inner__container">

      <div class="navbar__items__container" data-testid="navbar__items__container">

        <div class="navbar__logo__container" data-testid="navbar__logo__container">
          <h1 class="navbar__logo" data-testid="navbar__logo">{{translate('navbar.title')}}</h1>
        </div>

        <div class="navbar__routes__container" data-testid="navbar__routes__container">
          <RouterLink v-if="routes.length"
                      v-for="route in routes" :to="route.path"
                      :key="route.name"
                      class="navbar__link"
                      :data-testid="`navbar__link__${route.name?.toString()}`">{{ translate(`navbar.route.${String(route.name)}`) }}</RouterLink>
        </div>

        <div class="navbar__buttons__container" data-testid="navbar__buttons__container">
            <button type="button"
                    class="navbar__upload__button"
                    :title="translate('navbar.optionButton.upload.title')"
                    data-testid="navbar__upload__button"
                    @click.stop.prevent="Eventbus.emit(TranscriptionEventTypeConstants.UPLOAD_DATA)"
            ><img :src="'./assets/upload.svg'" alt="upload-icon"></button>

            <button type="button"
                    class="navbar__download__button"
                    :title="translate('navbar.optionButton.download.title')"
                    data-testid="navbar__download__button"
                    @click.stop.prevent="Eventbus.emit(TranscriptionEventTypeConstants.DOWNLOAD_DATA)"
            ><img :src="'./assets/fetch-document.svg'" alt="fetch-icon"></button>
        </div>

      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import {RouterLink, RouteRecord} from "vue-router";
import Eventbus from "../../eventbus";
import {
  TranscriptionEventTypeConstants
} from "../../integration/transcriptions/business/constants/transcription-event-type.constants";
import {PropType} from "vue";
import {translate} from "../../language-resource";

defineProps({
  routes: {
    type: Array as PropType<RouteRecord[]>,
    required: false,
    default: () => <RouteRecord[]>[]
  }
});

</script>

<style scoped lang="scss">
.navbar{
  padding: 20px;
  background-color: white;

  .navbar__inner__container {
    max-width: 1024px;
    min-width: 320px;
    width: 60%;
    margin: 0 auto;
  }

  .navbar__items__container {
    display: flex;
    align-items: center;
    justify-content: center;

    .navbar__logo__container {

      margin-right: auto;

      .navbar__logo {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #414C5E;
      }
    }

    .navbar__routes__container {
      .navbar__link {
        padding: 4px 8px;
      }
    }

    .navbar__buttons__container {

      margin-left: auto;

      button {
        cursor: pointer;
        border: 0;
        background: none;
        padding: 0;
      }

      .navbar__upload__button {
        margin-right: 20px;
      }
    }
  }
}
</style>
