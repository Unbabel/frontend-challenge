<template>
  <div>
    <HeaderComponent />
    <div class="container mt-4">
      <SearchComponent
        v-if="$store.state.transcriptionsArray.length"
        @search-input-changed="searchInputChanged"
      />
      <div class="card py-0">
        <TranscriptionRow
          v-for="(item, index) in $store.state.transcriptionsArray.filter(
            (i) =>
              i.text.toLowerCase().indexOf(searchText) > -1 ||
              i.voice.toLowerCase().indexOf(searchText) > -1
          )"
          :key="item.id"
          :keyForItem="index"
          :itemData="item"
        />
      </div>
      <div v-if="$store.state.transcriptionsArray.length">
        <div
          v-if="!searchText"
          class="d-flex justify-content-center add-row-button-container mt-3"
        >
          <CustomButton
            :isDisabled="false"
            :onButtonClick="addTranscriptionRow"
            :buttonLoading="false"
            v-if="!searchText"
            :isIcon="true"
            :buttonSize="'lg'"
            :iconUrl="require('@/assets-for-challenge/add-row@1x.png')"
          />
        </div>
      </div>
      <div
        v-else
        class="d-flex justify-content-center align-items-center flex-column empty-list-container"
      >
        <img
          class="empty-list"
          :width="100"
          :src="require('@/assets-for-challenge/empty.png')"
        />
        <div class="d-flex justify-content-center align-items-center">
          <h3 class="my-0">
            No Items to display. Please fetch the item list using
            <img
              class="fetch-icon mx-2"
              :width="25"
              :src="require('@/assets-for-challenge/fetch-document@1x.png')"
            />
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TranscriptionRow from "@/components/TranscriptionRow.vue";
import CustomButton from "@/components/CustomButton.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import store from "../store";

export default {
  name: "viewChallenge",
  components: {
    HeaderComponent,
    TranscriptionRow,
    CustomButton,
    SearchComponent,
  },
  data: () => ({
    searchText: "",
  }),
  methods: {
    addTranscriptionRow() {
      store.dispatch("addNewRowToTranscriptionsAction");
    },
    searchInputChanged(value) {
      this.searchText = value;
    },
  },
};
</script>
