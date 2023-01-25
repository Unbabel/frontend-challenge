<template>
  <img class="qa-icon" v-if="name.length > 0" :src="computedIcon" />
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedIcon() {
      return require(`@/assets/images/${this.name}.svg`);
    },
  },
};
</script>
