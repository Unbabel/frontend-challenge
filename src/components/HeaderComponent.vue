<template>
  <div class="headerClass">
    <div class="container py-4">
      <div class="d-flex justify-content-between">
        <h3 class="my-0 mx-2">Transcriptions</h3>
        <div class="d-flex flex-row align-items-start mx-2">
          <CustomButton
            :isDisabled="false"
            :onButtonClick="uploadTranscriptions"
            :buttonLoading="
              $store.state.currentLoadingButton === `post-transcriptions`
            "
            :isIcon="true"
            :iconUrl="require('@/assets-for-challenge/upload@1x.png')"
          />
          <CustomButton
            :isDisabled="false"
            :onButtonClick="loadTranscriptions"
            :buttonLoading="
              $store.state.currentLoadingButton === `fetch-transcriptions`
            "
            :isIcon="true"
            :iconUrl="require('@/assets-for-challenge/fetch-document@1x.png')"
          />
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
    keyForItem: {
      type: Number,
      required: false,
    },
  },
  methods: {
    uploadTranscriptions() {
      store.commit("updateCurrentLoadingButton", "post-transcriptions");
      store.dispatch("postTranscriptionsAction");
    },
    loadTranscriptions() {
      store.commit("updateCurrentLoadingButton", "fetch-transcriptions");
      store.dispatch("fetchTranscriptionsAction");
    },
  },
  components: {
    CustomButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerClass {
  font-family: "Montserrat-Medium";
  font-size: 18px;
}
</style>
