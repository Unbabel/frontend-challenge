<template>
  <div class="transcriptions">
    <HeaderComponent @requestUpload="uploadData" />
    <ItemsComponent
      :items="items"
      @addNewItem="addNewItem"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import ItemsComponent from "./ItemsComponent.vue";

export default {
  components: {
    HeaderComponent,
    ItemsComponent,
  },
  data() {
    return {
      items: [
        {
          id: "1",
          voice: "Voice 1",
          text: "This is better than the films—far, far, better. Why go to the cinema, when you can stage this sort of thing in your own home?",
        },
        {
          id: "2",
          voice: "Voice 2",
          text: "Yes, but look here, Doyle, what’s going to happen? We can’t have Laura taken off to the police-station.",
          checked: true,
        },
        { id: "3", voice: "Voice 1", text: "Why not?" },
        {
          id: "4",
          voice: "Voice 1",
          text: "It’d do her all the good in the world. And I wouldn’t bail her out either.",
        },
      ],
    };
  },
  methods: {
    // just a simple method to add items (locally)
    addNewItem() {
      const newItem = {
        id: Date.now().toString(),
        voice: "Title here",
        text: "Content here",
      };
      this.items.push(newItem);
    },
    // just a simple method to remove items (locally)
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    uploadData() {
      console.log("Upload data clicked");
    },
  },
};
</script>

<style scoped>
.transcriptions {
  background: #f6f7f8;
  min-height: 100%;
}
</style>
