<template>
  <div class="not-found">
    <h1>Page not found</h1>
    <button
      class="not-found__button"
      @click="redirectToHomepage"
    >
      Return to homepage
    </button>
  </div>
</template>
<script>
export default {
  name: 'NotFound',

  methods: {
    redirectToHomepage () {
      this.$router.push({ path: '/'})
    }
  }
};
</script>
<style lang="scss" scoped>
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .not-found__button {
    border: none;
    cursor: pointer;
    background-color: $purple;
    font-family: OpenSansRegular;
    font-size: $default-size;
                
  }
</style>
