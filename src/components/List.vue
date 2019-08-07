<template>
  <main>
    <Container>
      <transition-group name="fade" tag="ul">
        <li v-for="item in items" :key="item.id || item.tempId">
          <ListItem :item="item" />
        </li>
      </transition-group>
      <ul>
        <li v-if="items.length === 0" :key="`no-item`">
          <p>No transcripts. Add a new one or download.</p>
        </li>
      </ul>
      <section>
        <button v-on:click="addRow">
          <Icon :name="`add-row`" />
        </button>
      </section>
    </Container>
  </main>
</template>

<script>
import Vue from "vue";
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
      type: [String, Boolean]
    }
  },

  methods: mapMutations("transcriptions", {
    addRow: MUTATIONS.ADD
  }),

  watch: {
    status: function() {
      if (this.status === "loaded") {
        Vue.toasted
          .show("Data loaded", {
            type: "success"
          })
          .goAway(1000);
      }
      if (this.status === "saved") {
        Vue.toasted
          .show("Data saved", {
            type: "success"
          })
          .goAway(1000);
      }
    },
    error: function() {
      if (this.error === "loading") {
        Vue.toasted
          .show("Error loading", {
            type: "error"
          })
          .goAway(1000);
      }
      if (this.error === "saving") {
        Vue.toasted
          .show("Error saving", {
            type: "error"
          })
          .goAway(1000);
      }
      if (this.error === "no-changes") {
        Vue.toasted
          .show("Nothing to save", {
            type: "error"
          })
          .goAway(1000);
      }
    }
  }
};
</script>

<style scoped lang="scss">
main {
  padding: $rules-gutter 0;

  @media screen and (max-width: $rules-max-width) {
    padding: $rules-gutter;
  }
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
