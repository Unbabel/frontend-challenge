<template>
  <div class="sample container">
    <h1 class="sample__headline">Sample Page</h1>
    <p class="sample__text">This is a page just to show vue-router is being used.</p>
  </div>
</template>

<script>
export default {
  name: "SamplePage",
};
</script>

<style lang="scss">
.sample {
  &__headline {
    font-family: 'Montserrat', sans-serif;
    color: #566074;
    padding: 2rem 0;
  }

  &__text {
    font-family: "Open Sans", sans-serif;
    color: #778195;
  }
}
</style>
