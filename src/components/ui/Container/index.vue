<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "Container",

  props: {
    item: {
      required: true,
      type: Object
    }
  },

  methods: mapMutations("transcriptions", {
    deleteItem: MUTATIONS.DELETE
  })
};
</script>

<style scoped lang="scss">
div {
  max-width: 738px;
  margin: 0 auto;
}
</style>
