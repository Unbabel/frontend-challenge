<template>
  <div class="headerClass">
    <div class="container-fluid custom-container-width py-4">
      <div class="d-flex justify-content-between">
        <h3 class="my-0 mx-2" id="app-title">Transcriptions</h3>
        <div class="d-flex flex-row align-items-start mx-2">
          <CustomButton
            :isDisabled="false"
            :onButtonClick="uploadTranscriptions"
            id="post-transcriptions"
            :buttonLoading="currentLoadingButton === `post-transcriptions`"
            :isIcon="true"
            :iconUrl="require('@/assets-for-challenge/upload@1x.png')"
          />
          <CustomButton
            :isDisabled="false"
            id="fetch-transcriptions"
            :onButtonClick="loadTranscriptions"
            :buttonLoading="currentLoadingButton === `fetch-transcriptions`"
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
import { mapGetters } from "vuex";

export default {
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
  computed: {
    ...mapGetters({
      currentLoadingButton: "getCurrentLoadingButton",
    }),
  },
  components: {
    CustomButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-family: "Montserrat-Medium";
  font-size: 18px;
}
</style>
