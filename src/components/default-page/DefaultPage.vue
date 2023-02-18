<script setup>
defineProps({
  imageSrc: {
    type: String,
  },
  pageLabel: {
    type: String,
  },
  btnLabel: {
    type: String,
  },
  btnHandler: {
    type: String,
  },
});
</script>

<template>
  <div class="default-page-container flex-center">
    <img
      v-if="imageSrc"
      class="default-page-img"
      :src="imageSrc"
      alt="default-page-img"
    />
    <span v-if="pageLabel" class="default-page-label">{{ pageLabel }}</span>
    <button
      v-if="btnLabel && btnHandler"
      class="default-page-btn"
      @click="btnHandler"
    >
      {{ btnLabel }}
    </button>
  </div>
</template>

<style>
.default-page-container {
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: 4rem;
  flex-direction: column;
  row-gap: 2rem;
}

.default-page-img {
  width: 45%;
}

.default-page-label {
  width: 80%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--palette-dark);
}

.default-page-btn {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--palette-white);
  border: none;
  border-radius: 10px;
  background-color: var(--palette-purple);
  padding: 0.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .default-page-label,
  .default-page-btn {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .default-page-label,
  .default-page-btn {
    font-size: 0.7rem;
  }
}
</style>
