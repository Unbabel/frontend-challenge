<template>
  <div class="toolbar">
    <div class="toolbar-content">
      <h1 class="toolbar-title">Transcriptions</h1>
      <div>
        <button class="toolbar-action" type="button" @click="uploadContent">
          <img
            src="@/assets/upload.svg"
            width="24"
            height="24"
            alt="upload icon"
            title="Upload transcriptions"
          />
        </button>
        <button class="toolbar-action" type="button" @click="getContent">
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
  box-shadow: 0px 3px rgba(51, 51, 51, 0.29);
}

.toolbar-content {
  max-width: 738px;
  margin: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toolbar-title {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #414c5e;
}

.toolbar-action {
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  margin-left: 20px;
  color: #8f97a8;
  opacity: 0.7;
  transition: 0.25s opacity;
}

.toolbar-action:hover {
  opacity: 1;
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
