<template>
  <header-toolbar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderToolbar from "@/components/Toolbar/Toolbar.vue";

export default defineComponent({
  components: { HeaderToolbar },
  name: "HomeView",
});
</script>
