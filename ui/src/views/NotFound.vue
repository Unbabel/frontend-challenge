<template>
  <div class="msg">
    <h1 class="code">404</h1>
    <router-link to="/" class="link">Go to the list</router-link>
  </div>
</template>

<style scoped>
.msg {
  margin: 0 auto;
  text-align: center;
}

.code {
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
}

.link {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  text-decoration: none;
  padding: 16px;
  background: black;
  color: gray;
  border-radius: 4px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
});
</script>
