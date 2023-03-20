<template>
  <button
    :disabled="isDisabled"
    :class="`btn-${buttonSize} flex justify-content-center align-items-center ${
      buttonLoading ? 'button--loading' : ''
    } ${isIcon ? ' icon__button ' : ''} `"
    @click="onButtonClick"
  >
    <!-- display loader if button triggeres fetch to backend -->
    <div v-if="!buttonLoading">
      <div
        v-if="isIcon"
        class="d-flex justify-content-center align-items-center"
      >
        <img :src="iconUrl" />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    iconUrl: {
      type: String,
      required: true,
    },
    onButtonClick: {
      tyle: Function,
      required: true,
    },
    buttonLoading: {
      type: Boolean,
      required: false,
    },
    buttonSize: {
      type: String,
      required: false,
    },
    isDisabled: {
      type: Boolean,
      required: false,
    },
    isIcon: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    loading: false,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .headerClass {
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43);
  background-color: white;
} */
</style>
