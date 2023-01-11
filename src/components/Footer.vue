<template>
    <footer>
        <div class='toggle-switch'>
            <label>
                <input type='checkbox' @change="toggleTheme()" checked>
                <span class='slider'></span>
            </label>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        toggleTheme() {
            document.getElementById('app')?.classList.toggle('dark')
        }
    }
})
</script>

<style lang="scss" scoped>
$light: var(--background-light);
$dark: var(--background-dark);
$button-color: #8F97A8;

footer {
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: flex-end;

    height: 24px;
    padding-right: 12px;
    padding-bottom: 12px;
}

.toggle-switch {
  position: relative;
  width: 48px;
}

label {
  position: absolute;
  width: 100%;
  height: 24px;
  background-color: $dark;
  border-radius: 50px;
  cursor: pointer;
}

input {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
  border: 1px solid $button-color;
  box-sizing: border-box;
}

input:checked ~ .slider {
  background-color: $light;
  border: 1px solid $button-color;
}

.slider::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: inset 5px 0 0 1px $button-color;
  background-color: $dark;
  transition: 0.3s;
}

input:checked ~ .slider::before {
  transform: translateX(23px);
  background-color: $button-color;
  box-shadow: none;
}
</style>