<template>
  <button class="icon-button" v-on:click="onClick" v-bind:title="title">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    title: String,
    onClick: Function
  }
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  -webkit-appearance: none; 
}
</style>