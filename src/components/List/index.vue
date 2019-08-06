<template>
  <main>
    <Container>
      <ul>
        <li v-for="item in items" :key="item.id">
          <ListItem :item="item" />
        </li>
      </ul>
      <button v-if="status !== 'initial'" v-on:click="addRow">add row</button>
    </Container>
  </main>
</template>

<script>
import { mapMutations } from "vuex";

import ListItem from "@/components/ListItem";
import Container from "@/components/ui/Container";

import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "List",

  components: {
    Container,
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
      type: [Object, Boolean]
    }
  },

  methods: mapMutations("transcriptions", {
    addRow: MUTATIONS.ADD
  })
};
</script>

<style scoped lang="scss">
main {
  padding: $rules-gutter 0;
}
ul {
  list-style: none;
  background-color: $color-white;
}
</style>
