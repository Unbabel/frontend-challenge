<script setup>
// Components
import ListItem from '../components/list-item/Item.vue';
import IconButton from '../components/icon-button/IconButton.vue';
</script>

<template>
  <div class="transcriptions-container">
    <div class="transcriptions-inner-container">
      <div class="list">
        <ListItem />
      </div>
      <hr />
    </div>
    <div class="transcriptions-button-div">
      <IconButton icon='src/assets/add-row.svg' />
    </div>

  </div>
</template>

<style>
.transcriptions-container {
  margin: 1.5rem auto;
  width: 60%;
  display: flex;
  flex-direction: column;
}

.transcriptions-inner-container {
  height: 200px;
  background-color: var(--palette-white);
  border: 1px solid var(--palette-lighter-grey);
}

.list {
  padding: 1.5rem 3.3rem 1.5rem 1.75rem;
}

.transcriptions-button-div {
  width: fit-content;
  margin: 1.5rem auto 0 auto;
}

hr {
  border: none;
  border-top: 1px solid var(--palette-lighter-grey);
}

/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
