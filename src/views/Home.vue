<template>
  <div class="home">
    <Header />
    <List />
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";

export default {
  name: "home",
  components: {
    Header,
    List
  }
};
</script>
