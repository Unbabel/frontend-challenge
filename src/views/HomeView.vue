<template>
  <DefaultLayout>
    <List :list="LIST" @add="ADD_ITEM" />
  </DefaultLayout>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List/List.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("list/", ["LIST"]),
  },
  methods: {
    ...mapActions("list/", ["ADD_ITEM"]),
  },
  components: {
    List,
    DefaultLayout,
  },
};
</script>
