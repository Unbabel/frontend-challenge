<template>
  <header class="container__header">
    <h1>Transcriptions</h1>
    <div class="container__header__actions">
      <button @click="postTranscriptions" class="button">
        <img src="../assets/upload.svg" alt="Upload icon, an arrow pointing up" />
      </button>
      <button @click="retrieveTransactions" class="button">
        <img src="../assets/fetch-document.svg" alt="An icon with a plus sign, inside a square" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    postTranscriptions: Function,
    retrieveTransactions: Function,
  },
};
</script>

<style scoped>
.container__header {
  display: flex;
  justify-content: space-between;
  padding: 5px 80px;
  align-items: center;
  background-color: #fff;
  border-bottom: 2px solid lightgray;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #414c5e;
}

.container__header__actions {
  width: 100%;
  max-width: 70px;
  display: flex;
  justify-content: space-between;
}

.button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
