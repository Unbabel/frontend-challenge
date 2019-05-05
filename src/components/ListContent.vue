<template>
  <main id="list-content">
    <div class="wrapper">
      <Item v-for="(item, index) in listData" :item="item" :key="index"/>
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
    }
  }
};
</script>
