<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '../api/url';
import Transcription from './Transcription.vue';
import Header from './Header.vue';

export default {
  components: {
    Transcription,
    Header,
  },
  data() {
    return {
      loading: false,
      hasTranscriptions: false,
      transcriptions: [],
    };
  },
  methods: {
    async getAllTranscriptions() {
      this.loading = true;
      this.hasTranscriptions = false;

      const response = await axios.get(API_URL);
      const data = await response.data;

      this.transcriptions = [...data];

      this.loading = false;
      this.hasTranscriptions = true;
    },
    appendTranscriptions() {
      const item = { id: uuidv4(), text: '', voice: '' };

      this.transcriptions.push(item);
    },
    removeTranscriptions(elementIndex) {
      const isElementFoundInArray = elementIndex > -1;

      if (isElementFoundInArray) {
        this.transcriptions.splice(elementIndex, 1);
      }
    },
    async postTranscriptions() {
      await axios.post(API_URL, this.transcriptions);
    },
    retrieveTranscriptions() {
      this.getAllTranscriptions();
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <Header
        :retrieve-transactions="retrieveTranscriptions"
        :post-transcriptions="postTranscriptions"
      />

      <main class="container__main">
        <h2 v-if="loading">Loading...</h2>
        <p v-if="!hasTranscriptions && !loading" class="container__main__message">
          Click on
          <img src="../assets/fetch-document.svg" alt="An icon with a plus sign, inside a square" />
          to display the transcriptions
        </p>
        <div
          class="container__main__card"
          v-for="(transcription, index) in transcriptions"
          :key="transcription.id"
        >
          <Transcription
            :transcriptions="this.transcriptions"
            :index="index"
            :remove-transcriptions="removeTranscriptions"
          />
        </div>

        <div v-if="hasTranscriptions" class="container__main__action">
          <button class="button" @click="appendTranscriptions">
            <img src="../assets/add-row.svg" alt="Round button with a plus sign inside" />
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

.container__main {
  padding: 70px;
  background-color: #f6f7f8;
}

.container__main__message {
  text-align: center;
}

.container__main__card {
  border: 1px solid lightgray;
  background-color: #fff;
  padding: 12px 12px;
}

.container__main__action {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
