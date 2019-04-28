<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         :width="width"
         :height="height"
         :viewBox="viewBox"
         :aria-labelledby="iconName"
         role="presentation"
    >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
    export default {
        props: {
            iconName: {
                type: String,
                default: 'box'
            },
            width: {
                type: [Number, String],
                default: 18
            },
            height: {
                type: [Number, String],
                default: 18
            },
            viewBox:{
                type:[Number, String],
                default:"0 0 32 32"
            },
            iconColor: {
                type: String,
                default: 'currentColor'
            }
        }
    }
</script>

<style scoped>
    svg {
        display: inline-block;
        vertical-align: baseline;
        margin-bottom: -2px;
        cursor: pointer;
    }
</style>
