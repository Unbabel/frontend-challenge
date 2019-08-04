<template>
  <main class="landing-page">
    <hgroup class="landing-page--titles">
      <h1
        class="main-title"
      >{{titles && titles.title && titles.subtitle ? titles.title : "A Problem occurred"}}</h1>
      <h2
        class="subtitle"
      >{{titles && titles.subtitle && titles.title ? titles.subtitle : "Please refresh the page or try again in a bit"}}</h2>
    </hgroup>
    <div class="landing-page--links" tabindex="0">
      <router-link title="Link to transcriptions page" tag="a" to="/transcription-list" >Transcriptions</router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VueRouter from 'vue-router';

@Component
export default class DefaultLayout extends Vue {
  @Prop() private titles!: {
    title: string;
    subtitle: string;
  };
}
</script>

<style lang="scss">
@import "../../styles/index.scss";
@import "../../styles/Tools/tools";

.landing-page {
  height: -webkit-fill-available;
  height: -moz-available;
  height: stretch;
  background-image: -webkit-linear-gradient(
    38.5deg,
    colormapper($color-map, main-background-color) 28%,
    colormapper($color-map, highlight-color) 27%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &--titles {
    max-width: 768px;
    margin-left: 300px;

    .main-title {
      color: colormapper($color-map, main-background-color);
      font-size: 4rem;
    }

    .subtitle {
      color: colormapper($color-map, app-title-color);
      font-size: 2rem;
    }
  }

  &--links {
    width: 768px;
    margin-top: 20px;
    margin-left: 300px;
    display: flex;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 992px) {
  .landing-page {
    background-image: none;
    background-color: colormapper($color-map, highlight-color);

    &--titles,
    &--links {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>

