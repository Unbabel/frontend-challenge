<template>
  <div class="home">
    <div v-if="messages">
      <div v-for="item in messages" :key="item.id">
        <CardData
          :item="item"
          @updateMessageVoice="updateMessageVoice"
          @updateMessageText="updateMessageText"
          @deleteItem="deleteItem"
        />
      </div>
      <AddCardData @addItem="addItem" />
    </div>
  </div>
</template>

<script>
import CardData from "@/components/CardData.vue";
import AddCardData from "@/components/AddCardData.vue";
import store from "@/store";

export default {
  name: "HomeView",
  components: { CardData, AddCardData },
  computed: {
    messages() {
      return store.state.messages;
    },
  },
  methods: {
    addItem() {
      store.commit("addMessage");
      store.commit("checkFormValid");
    },
    deleteItem(id) {
      store.commit("deleteMessage", { id });
      store.commit("checkFormValid");
    },
    updateMessageVoice(id, value) {
      store.commit("updateMessageVoice", { id, value });
      store.commit("checkFormValid");
    },
    updateMessageText(id, value) {
      store.commit("updateMessageText", { id, value });
      store.commit("checkFormValid");
    },
  },
};
</script>
