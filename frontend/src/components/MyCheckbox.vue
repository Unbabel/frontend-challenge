<template>
<label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
      </label>
</template>

<script>
export default {
  name: 'MyCheckbox'
}

</script>


<style scoped>



.container {
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  background-color: white;
  border: 2px solid #859EFF;
  border-radius: 2px;
}

.container input:checked ~ .checkmark {
  background-color: #859EFF;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 3px;
  top: 0px;
  width: 4px;
  height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>


