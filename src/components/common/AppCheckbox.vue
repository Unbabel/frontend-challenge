<template>
  <div class="app-checkbox">
    <input
      v-model="checked"
      class="app-checkbox__transcription"
      type="checkbox"
    >
  </div>
</template>
    <script>
    export default {
      name: "AppCheckbox",
    
      data () {
          return {
              checked: false
          }
      }
  
    };
    </script>

<style lang="scss" scoped>

    .app-checkbox {
        padding-left: $default-size;
        padding-right: $default-size;
    }

    .app-checkbox__transcription {
        accent-color: $purple;
        width: $default-size;
        height: $default-size;
    }
</style>
    