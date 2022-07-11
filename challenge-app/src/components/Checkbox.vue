<template>
  <label class="checkbox">
    <span class="checkbox-box" :class="{ checked: checked }">
      <svg
        v-show="checked"
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.403823 4.56065C0.0132988 4.95118 0.0132988 5.58434 0.403823 5.97487L2.05374 7.62478L2.52514 8.09619L2.76085 8.33189C3.15137 8.72241 3.78453 8.72241 4.17506 8.33189L9.83191 2.67504C10.2224 2.28451 10.2224 1.65135 9.83191 1.26082C9.44139 0.870299 8.80822 0.870299 8.4177 1.26082L3.46795 6.21057L1.81804 4.56065C1.42751 4.17013 0.794347 4.17013 0.403823 4.56065Z"
          fill="white"
        />
      </svg>
    </span>
    <input
      type="checkbox"
      :checked="checked"
      @change="emit('update:checked', $event.target.checked)"
    />
  </label>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  }
});

const { checked } = toRefs(props);

const emit = defineEmits(["update:checked"]);
</script>

<style scoped lang="scss">
.checkbox {
  input {
    display: none;
  }

  &-box {
    width: 16px;
    height: 16px;
    background: $white;
    border: 2px solid $purple;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.checked {
      background: $purple;
    }
  }
}
</style>
