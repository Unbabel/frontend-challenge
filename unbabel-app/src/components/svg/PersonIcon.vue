<template>
  <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="person">
        <rect
          id="head"
          :fill="fill"
          x="0"
          y="0"
          width="26"
          height="26"
          rx="13"
        />
        <polygon
          id="nose"
          fill="#FFFFFF"
          points="13.4482759 12.5517241 17.4140288 16.5862069 13.4482759 17.3991447"
        />
        <circle
          id="eye-right"
          fill="#FFFFFF"
          cx="19.7241379" cy="10.7586207" r="1.79310345"
        />
        <circle
          id="eye-left"
          fill="#FFFFFF"
          cx="8.06896552"
          cy="10.7586207"
          r="1.79310345"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'PersonIcon',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fill () {
      return this.active ? '#859EFF' : '#34A5FF'
    }
  }
}
</script>
