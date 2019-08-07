<template>
  <main>
    <Container>
      <transition-group name="fade" tag="ul">
        <li v-for="item in items" :key="item.id">
          <ListItem :item="item" />
        </li>
        <li v-if="status === 'loading'" :key="`loading`">
          <Spinner />
        </li>
        <li v-if="status === 'initial'" :key="`initial`">
          <p>No transcripts available.</p>
        </li>
        <li
          v-if="
            status !== 'initial' && status !== 'error' && items.length === 0
          "
          :key="`no-item`"
        >
          <p>No transcripts. Add a new one or download again.</p>
        </li>
        <li v-if="status === 'error'" :key="`error`">
          <div class="error">
            <p v-if="error === 'loading'">Loading Error!</p>
            <p v-if="error === 'saving'">Saving Error!</p>
          </div>
        </li>
      </transition-group>
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
import Spinner from "@/components/ui/Spinner";

import { MUTATIONS } from "@/store/modules/transcriptions/constants";
export default {
  name: "List",

  components: {
    Container,
    ListItem,
    Icon,
    Spinner
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
      type: [String, Boolean]
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
}

.fade-enter-active,
.fade-leave-active {
  transition: all 100ms $easing-default;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
