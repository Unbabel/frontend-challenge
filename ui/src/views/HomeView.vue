<template>
  <header-toolbar />
  <list-container />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderToolbar from "@/components/Toolbar/Toolbar.vue";
import ListContainer from "@/components/ListContainer/ListContainer.vue";

export default defineComponent({
  components: { HeaderToolbar, ListContainer },
  name: "HomeView",
});
</script>
