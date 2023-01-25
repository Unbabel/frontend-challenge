<template>
  <div
    :class="`${status && 'opacity-70 bg-gray-200'}`"
    class="p-10 flex flex-col items-start gap-3"
  >
    <div class="flex items-center w-full justify-between px-3">
      <div class="flex items-center justify-start gap-3 hover:cursor-pointer">
        <!-- Checkbox -->
        <input
          type="checkbox"
          name="status"
          v-model="status"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0 focus:outline-none hover:cursor-pointer"
        />
        <img
          class="hover:cursor-pointer"
          src="@/assets/assets-for-challenge/person.svg"
          alt="Person's avatar!"
        />
        <h1
          :class="`${status && 'line-through'}`"
          class="font-primary font-semibold text-itemTitle-100 text-base"
        >
          {{ props.transaction.voice }}
        </h1>
      </div>
      <Transition name="delete">
        <slot></slot>
      </Transition>
    </div>
    <p
      class="font-secondary font-normal max-w-2xl container mx-auto text-itemContent-100 text-base hover:cursor-pointer"
      :class="`${status && 'line-through'}`"
    >
      {{ props.transaction.text }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const status = ref(false);
const props = defineProps({
  transaction: {},
});
</script>

<style scoped>
.items-enter-from {
  opacity: 0;
}

.items-enter-active {
  transition: opacity 0.5s ease;
}

.items-leave-from {
  opacity: 1;
}

.items-leave-active {
  transition: opacity 0.5s ease;
}
</style>
