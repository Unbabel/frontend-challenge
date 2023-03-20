<template>
  <div class="transcriptionRow">
    <div class="w-100">
      <div class="d-flex flex-row">
        <div class="customInput">
          <input :id="`${itemData.id}`" type="checkbox" />
          <label :for="`${itemData.id}`">
            <span></span>
          </label>
        </div>
        <div class="d-flex flex-row w-100">
          <img
            class="person-image"
            :src="require('@/assets-for-challenge/person@1x.png')"
          />
          <div class="text-left transcriptionRowContent">
            <div class="d-flex justify-content-between w-100">
              <input v-if="isEdit" v-model="itemTitle" placeholder="edit me" />
              <h4 v-else class="item-title">{{ itemTitle }}</h4>
              <div class="d-flex flex-row align-items-start action-buttons">
                <CustomButton
                  :isDisabled="false"
                  :onButtonClick="toggleEdit"
                  :buttonLoading="false"
                  :isIcon="true"
                  :iconUrl="
                    isEdit
                      ? require('@/assets-for-challenge/save.png')
                      : require('@/assets-for-challenge/pencil.png')
                  "
                />
                <CustomButton
                  :isDisabled="false"
                  :onButtonClick="deleteRow"
                  :buttonLoading="
                    $store.state.currentLoadingButton ===
                    `delete-` + itemData.id
                  "
                  :isIcon="true"
                  :iconUrl="require('@/assets-for-challenge/delete@1x.png')"
                />
              </div>
            </div>
            <textarea
              v-if="isEdit"
              v-model="itemContent"
              rows="5"
              placeholder="add multiple lines"
            ></textarea>
            <p v-else class="mb-0 item-content">{{ itemContent }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import store from "../store";

export default {
  props: {
    itemData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isEdit: this.itemData?.isEdit ? this.itemData?.isEdit : false,
      itemTitle: this.itemData?.voice ? this.itemData?.voice : "Title",
      itemContent: this.itemData?.text ? this.itemData?.text : "Content",
    };
  },
  methods: {
    deleteRow() {
      let itemIdToDelete = this.itemData.id;
      store.commit("updateCurrentLoadingButton", `delete-` + itemIdToDelete);
      store.dispatch("deleteRowTranscriptionsAction", itemIdToDelete);
    },
    toggleEdit() {
      if (this.isEdit) {
        let updatedItemData = JSON.parse(JSON.stringify(this.itemData));
        updatedItemData["voice"] = this.itemTitle;
        updatedItemData["text"] = this.itemContent;
        updatedItemData["isEdit"] = !this.isEdit;
        store.dispatch("editRowTranscriptionsAction", updatedItemData);
      }
      this.isEdit = !this.isEdit;
    },
  },
  components: {
    CustomButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-image {
  height: 25px;
  width: 25px;
  margin-right: 10px;
}
</style>
