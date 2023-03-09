<template>
  <div class="app-textarea">
    <textarea
      :value="text"
      class="app-textarea__text"
      placeholder="Insert a description for your voice transcription here..."
      @input="changeDescription($event.target.value)"
    />
  </div>
</template>
    <script>
    export default {
      name: "AppTextarea",
    
      props: {
        text: {
          type: String,
          required: true,
        }
      },

      emits: ['change-description'],

      methods: {
        changeDescription (description) {
            this.$emit('change-description', description)
        }
    }
    };
    </script>
    <style lang="scss" scoped>
  .app-textarea__text { 
    border: none;
    width: -webkit-fill-available;
    resize: none;
    color: $slate-gray;
    background: $white;
    font-size: $default-size;
    font-family: OpenSansRegular;
    }
    </style>