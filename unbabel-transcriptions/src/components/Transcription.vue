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
  <div class="container">
    <div class="container__profile">
      <div class="container__profile__checkbox">
        <Checkbox :val="transcriptions[index].id" />
        <img src="../assets/person.svg" alt="Blue ball representing a human face" />
      </div>
      <input v-model="transcriptions[index].voice" type="text" class="container__profile__title" />
    </div>
    <button class="container__button" @click="removeTranscriptions(index)">
      <img src="../assets/delete.svg" alt="Trash can Icon" />
    </button>
  </div>
  <br />
  <div class="container__textarea">
    <textarea
      rows="5"
      cols="80"
      v-model="transcriptions[index].text"
      class="container__textarea__content"
    ></textarea>
  </div>
</template>

<style scoped>
.container__profile__title {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #566074;
  margin-left: 10px;
  border: none;
}

.container__textarea__content {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #778195;
  border: none;
  resize: none;
}

.container__profile__title:hover {
  border: 1px solid #778195;
  border-radius: 2px;
  padding: 5px;
  transition: border 4s;
}
.container__textarea__content:hover {
  border: 1px solid #778195;
  border-radius: 2px;
  padding: 5px;
  transition: border 4s;
}
.container {
  display: flex;
  justify-content: space-between;
}

.container:hover > .container__button {
  display: block;
}
.container__button {
  display: none;
}

.container__button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.container__textarea {
  margin-left: 90px;
}

.container__profile {
  display: flex;
  align-items: center;
}

.container__profile__checkbox {
  display: inline-flex;
}
</style>
