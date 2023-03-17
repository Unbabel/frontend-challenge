<template>
  <div>
    <div class="add-card" @click="addItem">
      <img src="@/assets/add-row.svg" alt="Add new item" />
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "AddCardData",
  data() {
    return {
      isClicked: false,
      voice: "",
      text: "",
    };
  },
  methods: {
    addItem() {
      store.commit("addMessage");
    },
  },
};
</script>

<style lang="scss">
.add-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
}
</style>
