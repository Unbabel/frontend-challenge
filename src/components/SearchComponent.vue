<template>
  <div class="search-component">
    <!-- on change of input the search is triggered after timeout of 1.5 seconds -->
    <input
      v-on:input="myChangeFunction"
      v-model="searchText"
      placeholder="Search"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    searchText: "",
    time: null,
  }),
  methods: {
    myChangeFunction(event) {
      let value = event.target.value;
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        let searchValue = value.toLowerCase();
        this.$emit("search-input-changed", searchValue);
      }, 1500);
    },
  },
};
</script>
