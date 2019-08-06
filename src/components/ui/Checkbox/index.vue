<template>
  <label :for="`checkbox-${id}`">
    <input type="checkbox" :id="`checkbox-${id}`" />
    <span class="box">
      <span class="arrow"></span>
    </span>
  </label>
</template>
<script>
export default {
  name: "Checkbox",

  props: {
    id: {
      required: true,
      type: Number
    }
  }
};
</script>
<style scoped lang="scss">
label {
  display: inline-block;
  position: relative;
}

input {
  position: absolute;
  left: -99999px;
}

.box {
  display: inline-flex;
  cursor: pointer;
  min-height: 16px;
  padding-left: calc(16px + 0.4em);
}

.box:before,
.box:after {
  content: "";
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  font-size: 16px;

  position: absolute;
  left: 0;
  top: 0;
}

.box:before {
  border: 2px solid $color-purple;
  z-index: 2;
}

input:disabled ~ .box:before {
  border-color: $color-grey;
}

input:not(:disabled) ~ .box:after {
  background-color: $color-purple;
  opacity: 0;
}

input:not(:disabled):checked ~ .box:after {
  opacity: 1;
}

.arrow {
  margin-top: auto;
  margin-bottom: auto;
}

/*
  The arrow size and position depends from sizes of square because I needed an arrow correct positioning from the top left corner of the element toggle
  */

.arrow:before {
  content: "";
  box-sizing: border-box;
  width: 0;
  height: 0;
  font-size: 16px;

  border-left-width: 0;
  border-bottom-width: 0;
  border-left-style: solid;
  border-bottom-style: solid;
  border-color: $color-white;

  position: absolute;
  top: 0.5428em;
  left: 0.2em;
  z-index: 3;

  transform-origin: left top;
  transform: rotate(-40deg) skew(10deg);
}

input:not(:disabled):checked ~ .box .arrow:before {
  width: 0.5em;
  height: 0.25em;
  border-left-width: 2px;
  border-bottom-width: 2px;
  will-change: width, height;
  transition: width 0.1s ease-out 0.2s, height 0.2s ease-out;
}

/*
  =====
  LEVEL 2. PRESENTATION STYLES
  =====
  */

/*
  The demo skin
  */

.box:before,
.box:after {
  border-radius: 2px;
}

/*
  The animation of switching states
  */

input:not(:disabled) ~ .box:before,
input:not(:disabled) ~ .box:after {
  opacity: 1;
  transform-origin: center center;
  will-change: transform;
  transition: transform 0.2s ease-out;
}

input:not(:disabled) ~ .box:before {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}

input:not(:disabled) ~ .box:after {
  transform: rotateY(90deg);
}

input:not(:disabled):checked ~ .box:before {
  transform: rotateY(-90deg);
  transition-delay: 0s;
}

input:not(:disabled):checked ~ .box:after {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}

.arrow:before {
  opacity: 0;
}

input:not(:disabled):checked ~ .box .arrow:before {
  opacity: 1;
  transition: opacity 0.1s ease-out 0.3s, width 0.1s ease-out 0.5s,
    height 0.2s ease-out 0.3s;
}
</style>
