<template>
  <button @click="$emit('click')">
    {{ this.label }}<img :src="getImgUrl(icon)" :alt="label" />
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    label: { default: "" },
    icon: { default: "" },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style lang="scss">
button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: none;
  padding: 0.25rem 1rem;
  background-color: #e8e8e8;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    background-color: #d4d4d4;
  }
  img {
    margin-left: 0.5rem;
  }
}
</style>
