<script setup>
// Components
import PageTitle from '../page-title/PageTitle.vue';
import IconButton from '../icon-button/IconButton.vue';

</script>

<template>
  <div class="top-bar-container">
    <div class="top-bar-inner-container">
      <PageTitle text="Transcriptions" />
      <div class="top-bar-actions-container">
        <IconButton v-for="action in $route.meta?.actions" @onClickCallback="action.callback" :icon="action.icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-bar-container {
  width: 100%;
  height: 4.3rem;
  background-color: var(--palette-white);
  box-shadow: 0 1px 3px 0 var(--palette-transp-black);
}

.top-bar-inner-container {
  height: 100%;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.top-bar-actions-container {
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;
}
</style>
