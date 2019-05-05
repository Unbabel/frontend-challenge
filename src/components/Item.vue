<template>
  <div class="item">
    <div>
      <label class="checkbox">
        <input type="checkbox" value="true">
        <span class="checkmark"></span>
      </label>
      <img class="icon-person" src="../assets/images/person.svg" alt="Person Icon">
      <span class="title">{{item.voice}}</span>
      <button class="remove-item" @click="removeItem()">
        <img src="../assets/images/delete.svg" alt="Remove Item">
      </button>
    </div>
    <p class="content">{{item.text}}</p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {}
  },
  methods:{
    removeItem() {
      this.$emit("removeItem");
    }
  }
};
</script>
