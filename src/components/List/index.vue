<template>
  <main>
    <Container>
      <ul>
        <li v-for="item in items" :key="item.id">
          <ListItem :item="item" />
        </li>
        <li v-if="items.length === 0">
          <p>No transcripts available.</p>
        </li>
      </ul>
      <section>
        <button v-if="status !== 'initial'" v-on:click="addRow">
          <Icon :name="`add-row`" />
        </button>
      </section>
    </Container>
  </main>
</template>

<script>
import { mapMutations } from "vuex";

import ListItem from "@/components/ListItem";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "List",

  components: {
    Container,
    ListItem,
    Icon
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

  p {
    padding: $rules-gutter;
    color: $color-grey;
  }
}

section {
  width: 100%;
  text-align: center;
  padding: $rules-gutter;
  box-sizing: border-box;

  button {
  }
}
</style>
