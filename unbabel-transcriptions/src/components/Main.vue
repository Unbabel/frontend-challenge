<script>
import axios from 'axios';
import { API_URL } from '../api/url';
import Checkbox from './Checkbox.vue';

// TODO: customise checkbox
// TODO: add funcionality to to add button at bottom

export default {
  components: {
    Checkbox,
  },
  data() {
    return { transcriptions: null };
  },
  methods: {
    async getAllTranscriptions() {
      const response = await axios.get(API_URL);
      const data = await response.data;
      this.transcriptions = data;
    },
  },
  mounted() {
    this.getAllTranscriptions();
  },
};
</script>

<template>
  <section>
    <div class="container">
      <header class="container__header">
        <h1>Transcriptions</h1>
        <div class="container__header__actions">
          <button class="button">
            <img
              src="../assets/upload.svg"
              alt="Upload icon, an arrow pointing up"
            />
          </button>
          <button class="button">
            <img
              src="../assets/fetch-document.svg"
              alt="An icon with a plus sign, inside a square"
            />
          </button>
        </div>
      </header>

      <main class="container__main">
        <div
          class="container__main__card"
          v-for="transcription in transcriptions"
          :key="transcription.id"
        >
          <div class="sup">
            <div class="initial">
              <div class="intital__profile">
                <input type="checkbox" />
                <img
                  src="../assets/person.svg"
                  alt="Blue ball representing a human face"
                />
              </div>
              <span class="container__main__card__title">{{
                transcription.voice
              }}</span>
            </div>
            <button class="container__main__card__button">
              <img src="../assets/delete.svg" alt="Trash can Icon" />
            </button>
          </div>
          <br />
          <div class="inf">
            <span class="container__main__card__title__paragraph">{{
              transcription.text
            }}</span>
          </div>
        </div>

        <div class="container__main__action">
          <button class="button">
            <img
              src="../assets/add-row.svg"
              alt="Round button with a plus sign inside"
            />
          </button>
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px 30px;
  width: 100%;
  border: 2px solid lightgrey;
  background-color: white;
}

.container__header {
  display: flex;
  justify-content: space-between;
  padding: 5px 80px;
  align-items: center;
  background-color: #fff;
  border-bottom: 2px solid lightgray;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}

.container__header__actions {
  width: 100%;
  max-width: 70px;
  display: flex;
  justify-content: space-between;
}

.container__main {
  padding: 70px;
  background-color: #f6f7f8;
}

.container__main__card {
  border: 1px solid lightgray;
  background-color: #fff;
  padding: 12px 12px;
}

.container__main__card__title {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.container__main__card__title__paragraph {
  font-family: 'Open Sans', sans-serif;
}

.container__main__card > .sup {
  display: flex;
  justify-content: space-between;
}

.container__main__card > .inf {
  margin-left: 50px;
}

.sup:hover > .container__main__card__button {
  display: block;
}
.container__main__card__button {
  display: none;
}

.container__main__card > .sup > .initial {
  display: flex;
  align-items: center;
}

.container__main__card > .sup > .initial > .intital__profile {
  display: inline-flex;
}

.container__main__card > .sup > .initial > span {
  margin-left: 10px;
}

.container__main__card__button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.container__main__action {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.container__main__action > button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
