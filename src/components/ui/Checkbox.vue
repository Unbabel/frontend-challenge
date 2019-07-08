<template>
  <div>
    <input type="checkbox" :id="id">
    <label :for="id"></label>
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    id: Number
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

input {
  display: none;
}

label {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 2px solid $checkbox-border-color;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  margin: 5px 16px 0 0;
  display: block;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 1px;
    width: 11px;
    height: 8px;
    z-index: 1;
    background: url('~@/assets/images/check-mark.svg') center / cover no-repeat;
    display: none;
  }
}

input:checked + label {
  background-color: $checkbox-border-color;

  &::before {
    display: block;
  }
}
</style>
