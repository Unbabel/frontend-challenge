<template>
  <transition name="bottom">
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </transition>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    errorMessage: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

p {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: $default-padding;
  text-align: center;
  font-family: $ff-m-medium;
  color: #FFFFFF;
  font-size: 16px;
  background-color: $list-text-color;
}

.bottom-enter-active, .bottom-leave-active {
  transition: all $default-time $default-easing;
}

.bottom-enter, .bottom-leave-to {
  opacity: 0;
  bottom: -80px;
}
</style>
