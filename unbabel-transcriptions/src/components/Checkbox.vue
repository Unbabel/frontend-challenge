<script>
export default {
  name: 'Checkbox',
  props: {
    val: String,
  },
};
</script>

<template>
  <input type="checkbox" id="{{val}}" />
  <label for="{{val}}"></label>
</template>

<style scoped>
[type='checkbox'] {
  opacity: 0;
}

[type='checkbox'] + label {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  display: inline-block;
  color: #666;
  line-height: 16px;
}

[type='checkbox'] + label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  outline: 2px solid #859eff;
  background: #fff;
  border-radius: 1px;
}

[type='checkbox']:checked + label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  outline: 2px solid red;
  background: #fff;
  border-radius: 1px;
}

[type='checkbox']:checked + label::after {
  background-size: contain;
  background-image: url(../assets/check-mark-svgrepo-com.svg);
}
</style>
