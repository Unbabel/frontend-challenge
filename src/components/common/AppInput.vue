<template>
  <div class="app-input">
    <input
      :value="voice"
      class="app-input__title"
      type="text"
      placeholder="Insert a title here..."
      @input="changeTitle($event.target.value)"
    >
  </div>
</template>
  <script>
  export default {
    name: "AppInput",
  
    props: {
      voice: {
        type: String,
        required: true,
      },
    },

    emits: ['change-title'],

    methods: {
        changeTitle (title) {
            this.$emit('change-title', title)
        }
    }
  };
  </script>
  <style lang="scss" scoped>

.app-input__title { 
  border: none;
  background: $white;
  font-size: $default-size;
  font-family: MontserratSemiBold;
  margin-bottom: $default-size;
  width: 100%;
  }
  </style>
  