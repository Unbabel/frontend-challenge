<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <p>{{ item.voice }}</p>
        <p>{{ item.text }}</p>
      </li>
    </ul>
    <button v-if="status === 'loaded'" v-on:click="addRow">add row</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "List",

  props: {
    items: {
      required: true,
      type: Array
    },
    status: {
      required: true,
      type: String
    },
    error: {
      type: Object
    }
  },

  methods: mapMutations("transcriptions", {
    addRow: MUTATIONS.ADD
  })
};
</script>

<style scoped lang="scss"></style>
