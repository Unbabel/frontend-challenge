<script>
import Checkbox from './Checkbox.vue';

export default {
  name: 'Transcription',
  props: {
    transcriptions: Array,
    index: [String, Number],
    removeTranscriptions: Function,
  },
  components: {
    Checkbox,
  },
};
</script>

<template>
  <div class="sup">
    <div class="initial">
      <div class="intital__profile">
        <Checkbox :val="transcriptions[index].id" />
        <img src="../assets/person.svg" alt="Blue ball representing a human face" />
      </div>
      <input
        v-model="transcriptions[index].voice"
        type="text"
        class="container__main__card__title"
      />
    </div>
    <button class="container__main__card__button" @click="removeTranscriptions(index)">
      <img src="../assets/delete.svg" alt="Trash can Icon" />
    </button>
  </div>
  <br />
  <div class="inf">
    <textarea
      rows="5"
      cols="80"
      v-model="transcriptions[index].text"
      class="container__main__card__title__paragraph"
    ></textarea>
  </div>
</template>

<style scoped>
.container__main__card__title {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #566074;
  margin-left: 10px;
  border: none;
}

.container__main__card__title__paragraph {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #778195;
  border: none;
  resize: none;
}

.container__main__card__title:hover {
  border: 1px solid #778195;
  border-radius: 2px;
  padding: 5px;
  transition: border 4s;
}
.container__main__card__title__paragraph:hover {
  border: 1px solid #778195;
  border-radius: 2px;
  padding: 5px;
  transition: border 4s;
}
.sup {
  display: flex;
  justify-content: space-between;
}

.sup:hover > .container__main__card__button {
  display: block;
}
.container__main__card__button {
  display: none;
}

.container__main__card__button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.inf {
  margin-left: 90px;
}

.initial {
  display: flex;
  align-items: center;
}

.intital__profile {
  display: inline-flex;
}
</style>
