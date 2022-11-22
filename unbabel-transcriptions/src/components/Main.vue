<script>
import axios from 'axios';
import { API_URL } from '../api/url';

export default {
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
          <span
            ><img
              src="../assets/upload.svg"
              alt="Upload icon, an arrow pointing up"
          /></span>
          <span
            ><img
              src="../assets/fetch-document.svg"
              alt="An icon with a plus sign, inside a square"
          /></span>
        </div>
      </header>
      <hr />
      <main class="container__main">
        <div
          class="container__main__card"
          v-for="transcription in transcriptions"
          :key="transcription.id"
        >
          <div class="sup">
            <div class="initial">
              <div class="intital__profile">
                <input type="checkbox" name="voice" />
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
          <button>
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
  max-width: 710px;
  border: 2px solid lightgrey;
  background-color: white;
}

.container__header {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid lightgray;
  font-family: 'Montserrat', sans-serif;
}

.container__header__actions {
  width: 100%;
  max-width: 60px;
  display: flex;
  justify-content: space-between;
}

.container__main {
  padding: 10px;
}

.container__main__card {
  border: 1px solid lightgray;
  background-color: white;
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
</style>
