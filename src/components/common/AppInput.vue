<template>
  <div class="app-input">
    <input
      :value="voice"
      class="app-input__title"
      type="text"
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
  };
  </script>
  <style lang="scss" scoped>

.app-input__title { 
  border: none;
  background: $white;
  font-size: $default-size;
  font-family: MontserratSemiBold;
  margin-bottom: $default-size;
  }
  </style>
  