<template>
  <div class="not-found">
    <h1>Page not found</h1>
    <AppButton
      @click="redirectToHomepage"
    >
      Return to homepage
    </AppButton>
  </div>
</template>
<script>
import AppButton from '@/components/common/AppButton.vue'

export default {
  name: 'NotFound',

  components: { AppButton },

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
    border-radius: 8px;
    cursor: pointer;
    background-color: $purple;
    font-family: OpenSansRegular;
    font-size: $default-size;
         
    &:hover {
      background-color: $white;
      color: $purple;
    }
  }
</style>
