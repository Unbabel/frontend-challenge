<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox-input" value="" />
    <span class="checkbox-mark" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputCheckbox",
});
</script>

<style scoped>
.checkbox {
  width: 16px;
  cursor: pointer;
  margin-top: 4px;
}

.checkbox-input {
  appearance: none;
  position: absolute;
  opacity: 0;
}

.checkbox-mark {
  position: absolute;
  height: 16px;
  width: 16px;
  border: 2px solid #859eff;
  border-radius: 3px;
}

.checkbox-mark::after {
  content: "";
  position: absolute;
  display: none;
  left: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(46deg);
}

.checkbox-input:checked ~ .checkbox-mark {
  background-color: #859eff;
}
.checkbox-input:checked ~ .checkbox-mark::after {
  display: block;
}
</style>
