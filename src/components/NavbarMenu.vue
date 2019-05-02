<template>
  <nav id="navbar-menu">
    <h1 class="app-title">Transcriptions</h1>
    <ul>
      <button @click="uploadData()">up</button>
      <button @click="getData()">gd</button>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarMenu",
  methods: {
    uploadData: function() { this.$emit("uploadData") },
    getData: function() { this.$emit("getData") }
  }
};
</script>
