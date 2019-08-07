<template>
  <div class="home">
    <vue-helmet title="Transcriptions | Home" />
    <List :items="transcriptions" :status="status" :error="error" />
  </div>
</template>

<script>
import VueHelmet from "vue-helmet";
import { mapGetters } from "vuex";

import List from "@/components/List";

export default {
  name: "home",
  components: {
    VueHelmet,
    List
  },
  computed: mapGetters("transcriptions", ["transcriptions", "status", "error"])
};
</script>
