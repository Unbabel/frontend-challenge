<template>
  <transition name="bottom-to-left">
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

.bottom-to-left-enter-active, .bottom-to-left-leave-active {
  transition: all $default-time $default-easing;
}

.bottom-to-left-enter {
  opacity: 0;
  bottom: -80px;
}

.bottom-to-left-leave-to {
  opacity: 0;
  left: -100vw;
}
</style>
