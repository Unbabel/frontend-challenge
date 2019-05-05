<template>
  <nav id="navbar-menu">
    <div class="wrapper">
      <h1 class="app-title">Transcriptions</h1>
      <ul class="actions">
        <button @click="uploadData()">
          <img src="../assets/images/upload.svg" alt="Upload Data">
        </button>
        <button @click="getData()">
          <img src="../assets/images/fetch-document.svg" alt="Get Data">
        </button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMenu",
  methods: {
    uploadData() {
      this.$emit("uploadData");
    },

    getData() {
      this.$emit("getData");
    }
  }
};
</script>
