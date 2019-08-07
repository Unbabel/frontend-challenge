<template>
  <main class="home">
    <vue-headful
      title="HOME // Unbabel Frontend Challenge"
      description="Unbabel Frontend Challenge"
    />
    <List :items="transcriptions" :status="status" :error="error" />
  </main>
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
<style scoped lang="scss">
main {
  min-height: 80vh;
}
</style>
