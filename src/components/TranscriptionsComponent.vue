<template>
  <div class="transcriptions">
    <HeaderComponent @requestUpload="uploadData" />
    <ItemsComponent
      :items="activeItems"
      @addNewItem="addNewItem"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HeaderComponent from "./HeaderComponent.vue";
import ItemsComponent from "./ItemsComponent.vue";
import axios from "axios";

export default {
  components: {
    HeaderComponent,
    ItemsComponent,
  },
  computed: {
    ...mapState(["items"]),
    activeItems() {
      return this.items.filter((item) => !item.deleted);
    },
  },
  methods: {
    ...mapActions(["addItem", "deleteItem", "updateItemUploadStatus"]),
    addNewItem() {
      const newItem = {
        id: Date.now(),
        voice: "Title here",
        text: "Content here"
      };
      this.addItem(newItem);
    },
    async uploadData() {
      for (const item of this.items.filter((item) => !item.isUploaded)) {
        try {
          const response = await axios.post(
            "https://65c568dfe5b94dfca2e00221.mockapi.io/fe-challenge",
            item
          );
          console.log("Upload successful", response.data);
          // Assuming response.data contains the new item data with the backend-assigned ID
          this.$store.commit("UPDATE_ITEM_ID", {
            oldId: item.id,
            newId: response.data.id,
          });
        } catch (error) {
          console.error("Upload error:", error);
        }
      }
    },

    updateItemStatus(itemId, isUploaded) {
      this.updateItemUploadStatus({ itemId, isUploaded });
    },
  },
};
</script>

<style scoped lang="scss">
.transcriptions {
  background: #f6f7f8;
  min-height: 100%;
}
</style>
