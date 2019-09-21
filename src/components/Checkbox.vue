<template>
  <span>
    <input type="checkbox" :name="id" :id="id" />
    <label :for="id">
      <span />
    </label>
  </span>
</template>

<script>
export default {
  name: 'Checkbox',
  props:{
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  label {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #859EFF;
    border-radius: 2px;
    transition: background-color 0.5s ease;
  }

  label span {
    display: block;
    opacity: 0;
    width: 12px;
    height: 7px;
    border-left: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
    transition: all 0.5s ease;
  }

  input:checked + label {
    background: #859EFF;
  }


  input:checked + label span {
    opacity: 1;
    transform: rotate(-35deg);
  }

  input {
    display: none;
  }
</style>