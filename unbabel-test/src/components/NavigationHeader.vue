<template>
  <nav>
    <div class="container">
      <h1>Transcriptions</h1>
      <div class="buttons">
        <CustomButton @click="upload" label="Upload Data" icon="upload.svg" />
        <CustomButton
          @click="fetch"
          label="Get Data"
          icon="fetch-document.svg"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import CustomButton from "@/components/CustomButton";
import store from "@/store";

export default {
  name: "NavigationHeader",
  components: { CustomButton },
  methods: {
    upload() {
      store.dispatch("uploadMessages");
    },
    fetch() {
      store.dispatch("getMessages");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  background-color: #fff;
  border-bottom: 2px solid #c5dcff;
  margin-bottom: 2rem;
}
.container {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #566074;
    margin: 0;
  }
  .buttons {
    display: flex;
    gap: 1rem;
  }
}
</style>
