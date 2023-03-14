<template>
  <div class="home">
    <div :v-if="this.messages">
      <div v-for="item in this.messages" :key="item.id">
        <CardData :item="item" />
      </div>
      <AddCardData />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardData from "@/components/CardData.vue";
import AddCardData from "@/components/AddCardData.vue";

export default {
  name: "HomeView",
  components: { CardData, AddCardData },
  computed: mapState(["messages"]),
  mounted() {
    this.$store.dispatch("getMessages");
  },
};
</script>
