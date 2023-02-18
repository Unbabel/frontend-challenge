<script setup>
// Components
import PageTitle from "../page-title/PageTitle.vue";
import IconButton from "../icon-button/IconButton.vue";
</script>

<template>
  <div class="top-bar-container">
    <div class="top-bar-inner-container flex-center flex-center-row">
      <PageTitle text="Transcriptions" />
      <div class="top-bar-actions-container flex-center flex-center-row">
        <IconButton
          v-for="action in $route.meta?.actions"
          @onClickCallback="action.callback"
          :icon="action.icon"
        />
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
  width: 55%;
  margin: 0 auto;
  justify-content: space-between;
}

.top-bar-actions-container {
  column-gap: 0.5rem;
}

@media (max-width: 768px) {
  .top-bar-inner-container {
    width: 90%;
  }
}
</style>
