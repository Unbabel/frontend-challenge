<template>
  <main id="list-content">
    <div class="wrapper">
      <Item v-for="(item, index) in listData" :item="item" :key="index" @removeItem="removeItem"/>
    </div>
    <button class="add-item" @click="addItem()">
      <img src="../assets/images/add-row.svg" alt="Add Item">
    </button>
  </main>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "ListContent",
  components: {
    Item
  },
  props: {
    listData: { type: Array }
  },
  methods: {
    addItem() {
      this.$emit("addItem");
    },

    removeItem(id) {
      this.listData.splice(this.listData.findIndex(item => item.id === id), 1);
    }
  }
};
</script>
