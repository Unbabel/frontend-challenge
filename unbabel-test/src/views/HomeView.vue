<template>
  <div class="home">
    <div v-if="messages">
      <div v-for="item in messages" :key="item.id">
        <CardData
          :item="item"
          :updateMessageVoice="updateMessageVoice"
          :updateMessageText="updateMessageText"
        />
      </div>
      <AddCardData />
    </div>
  </div>
</template>

<script>
import CardData from "@/components/CardData.vue";
import AddCardData from "@/components/AddCardData.vue";

export default {
  name: "HomeView",
  components: { CardData, AddCardData },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
  methods: {
    updateMessageVoice(e) {
      this.$store.commit("updateMessageVoice", e.target);
    },
    updateMessageText(e) {
      this.$store.commit("updateMessageText", e.target);
    },
  },
};
</script>
