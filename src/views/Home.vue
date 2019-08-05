<template>
  <div class="home">
    <List :items="transcriptions" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import List from "@/components/List";

export default {
  name: "home",
  components: {
    List
  },
  computed: mapGetters("transcriptions", ["transcriptions"])
};
</script>
