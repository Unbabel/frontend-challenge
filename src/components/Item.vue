<template>
  <div class="item">
    <div>
      <label class="checkbox">
        <input type="checkbox" value="true">
        <span class="checkmark"></span>
      </label>
      <img class="icon-person" src="../assets/images/person.svg" alt="Person Icon">
      <span class="title" contenteditable="true" @focusout="edit($event, 'voice')">{{item.voice}}</span>
      <button class="remove-item" @click="removeItem(item.id)">
        <img src="../assets/images/delete.svg" alt="Remove Item">
      </button>
    </div>
    <p class="content" contenteditable="true" @focusout="edit($event, 'text')">{{item.text}}</p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {}
  },
  methods: {
    removeItem(id) {
      this.$emit("removeItem", id);
    },
    edit($event, target) {
      this.item[target] = $event.target.innerText;
    }
  }
};
</script>
