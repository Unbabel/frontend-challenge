<template>
  <div class="toolbar">
    <div
      class="flex align-center justify-between fixed-max-width margin-center toolbar-content"
    >
      <h1 class="font-montserrat toolbar-title">Transcriptions</h1>
      <div>
        <button
          class="toolbar-action toolbar-action--upload"
          type="button"
          @click="uploadContent"
        >
          <img
            src="@/assets/upload.svg"
            width="24"
            height="24"
            alt="upload icon"
            title="Upload transcriptions"
          />
        </button>
        <button
          class="toolbar-action toolbar-action--get"
          type="button"
          @click="getContent"
        >
          <img
            src="@/assets/fetch-document.svg"
            width="24"
            height="24"
            alt="fetch icon"
            title="Get transcriptions from the server"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  position: fixed;
  height: 69px;
  width: 100%;
  background: white;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 0.29);
  z-index: 1;
}

.toolbar-content {
  padding: 0 24px;
  height: 100%;
}

.toolbar-title {
  font-size: 18px;
  font-weight: 500;
  color: #414c5e;
}

.toolbar-action {
  margin-left: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { CONSTANTS } from "@/utils/constants";

export default defineComponent({
  name: "HeaderToolbar",
  methods: {
    getContent() {
      store.dispatch(CONSTANTS.STORE.ACTIONS.FETCH_DATA);
    },
    uploadContent() {
      store.dispatch(CONSTANTS.STORE.ACTIONS.SEND_DATA);
    },
  },
});
</script>
