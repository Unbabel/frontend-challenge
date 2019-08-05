<template>
  <div class="home">
    <List :items="transcriptions" :status="status" :error="error" />
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
  computed: mapGetters("transcriptions", ["transcriptions", "status", "error"])
};
</script>
