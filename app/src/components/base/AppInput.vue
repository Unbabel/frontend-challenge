<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "inputId",
  },
  type: {
    type: String,
    default: "text",
  },
  value: {
    default: "",
  },
  placeholder: {
    type: String,
    default: "Type here",
  },
});

const emit = defineEmits(["change"]);
</script>

<template>
  <input
    :id="id"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="value"
    @change="emit('change', $event.target.value)"
  />
</template>

<style scoped lang="scss">
input {
  border: none;
  padding: 0;
  outline: 0;

  &::placeholder {
    opacity: 0.6;
    font-style: italic;
  }
}
</style>
