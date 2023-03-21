<template>
  <button
    :disabled="isDisabled"
    :class="`flex justify-content-center align-items-center ${
      buttonLoading ? 'button--loading' : ''
    } ${buttonSize ? `  btn-${buttonSize} ` : ''} ${
      isIcon ? ' icon__button ' : ''
    } `"
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
};
</script>
