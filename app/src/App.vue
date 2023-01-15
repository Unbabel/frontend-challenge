<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log("on mounted");
})
</script>

<template>
  <div id="app">
    <header>
      <HelloWorld msg="Unbabel FE Challenge" />
    </header>

    <router-view />
  </div>
</template>

<style scoped></style>
