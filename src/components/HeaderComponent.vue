<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <h1 class="header__title">Transcriptions</h1>
        <button class="header__button header__button--upload" @click="$emit('requestUpload')">
          <img
            src="@/assets/upload.svg"
            aria-label="Upload data"
            alt="Upload data"
          />
        </button>
        <button class="header__button header__button--fetch" @click="fetchData">
          <img
            src="@/assets/fetch-document.svg"
            aria-label="Get data"
            alt="get data"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchItems"]),
    async fetchData() {
      try {
        await this.fetchItems();
      } catch (error) {
        console.error("Fetch items failed:", error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";

.header {
  padding: 1.3rem 0;
  background: white;
  box-shadow: 0px 1px 2px 0px rgba($black, 0.24),
    0px 1px 3px 0px rgba($black, 0.12);

  &__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1.5rem;
  }

  &__title {
    flex: 1;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    color: #414c5e;
  }

  &__button {
    &:first-of-type {
      margin-right: 1rem;
    }
  }
}
</style>
