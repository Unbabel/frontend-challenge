<template>
  <div class="flex column align-center justify-center msg">
    <h1 class="font-montserrat code">404</h1>
    <router-link to="/" class="font-open-sans link">Go to the list</router-link>
  </div>
</template>

<style scoped>
.msg {
  height: 100vh;
}

.code {
  font-size: 160px;
  font-weight: 600;
  margin-bottom: 40px;
}

.link {
  font-size: 20px;
  text-decoration: none;
  padding: 16px;
  background: black;
  color: white;
  border-radius: 4px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
});
</script>
