<script>
export default {
  methods: {
    onBtnClickHandler() {
      console.log(this.$router.push('/'));
    }
  }
}
</script>

<template>
  <div class="not-found-container flex-center">
    <img class="not-found-img" src="src/assets/not-found.svg" alt="not-found-img">
    <span class="not-found-label">Ah, the dreaded 404. Let's get you back on track.</span>
    <button class="not-found-btn" @click="onBtnClickHandler">Take Me Home</button>
  </div>
</template>

<style>
.not-found-container {
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: 4rem;
  flex-direction: column;
  row-gap: 2rem;
}

.not-found-img {
  width: 45%;
}

.not-found-label {
  width: 80%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--palette-dark);
}

.not-found-btn {
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

  .not-found-label,
  .not-found-btn {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {

  .not-found-label,
  .not-found-btn {
    font-size: 0.7rem;
  }
}
</style>
