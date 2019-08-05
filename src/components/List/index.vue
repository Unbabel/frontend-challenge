<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <ListItem :item="item" />
      </li>
    </ul>
    <button v-if="status !== 'initial'" v-on:click="addRow">add row</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ListItem from '@/components/ListItem';
import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "List",

  components: {
    ListItem
  },

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
