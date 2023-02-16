<script setup>
import Input from '../../input/Input.vue';

defineProps({
  content: {
    type: String,
  },
});

const onChangeHandler = (value) => console.log(value);

</script>

<template>
  <Input customStyles="content-styles" :value="content" @onChangeCallback="onChangeHandler"
    placeholder="Insert content..." />
</template>

<style scoped>
.content-styles {
  font-family: 'Open Sans';
  font-weight: 400;
  color: var(--palette-grey);
  text-justify: distribute;
}
</style>
