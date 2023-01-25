<template>
  <Transition name="toast">
    <div
      id="toast-danger"
      role="alert"
      class="container mx-auto fixed top-0 left-0 right-0 flex items-center justify-evenly w-full max-w-xs p-4 mb-4 text-gray-500 bg-slate-300 rounded-lg shadow"
      :class="isToasted && 'hidden'"
    >
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-red-100 rounded-lg dark:bg-red-500"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Error icon</span>
      </div>
      <slot></slot>
      <button
        type="button"
        class="bg-white text-slate-500 hover:text-green-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        data-dismiss-target="#toast-danger"
        aria-label="Close"
        @click="isToasted = !isToasted"
      >
        <span class="sr-only">Close</span>
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const isToasted = ref(false);
</script>

<style scoped>
.toast-enter-from {
  opacity: 0;
  transform: translateY("-100px");
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 1s ease-in;
}

.toast-leave-from {
  transform: translateY("-100px");
  opacity: 1;
}
.toast-leave-to {
  transform: translateY(0);
  opacity: 0;
}
.toast-leave-active {
  transition: all 1s ease-out;
}
</style>
