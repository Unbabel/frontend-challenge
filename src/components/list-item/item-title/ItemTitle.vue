<script setup>
import Input from '../../input/Input.vue';

defineProps({
  text: {
    type: String,
  },
});

const onChangeHandler = (value) => console.log(value);

</script>

<template>
  <Input customStyles="title-styles" :value="text" @onChangeCallback="onChangeHandler" placeholder="Insert title..." />
</template>

<style scoped>
.title-styles {
  font-family: "Montserrat";
  font-weight: 600;
  color: var(--palette-light-grey);
}
</style>
