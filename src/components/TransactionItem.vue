<template>
  <div class="p-10 flex flex-col items-start gap-3">
    <div class="flex items-center w-full justify-between px-3">
      <div class="flex items-center justify-start gap-3 hover:cursor-pointer">
        <!-- Checkbox -->
        <img
          class="hover:cursor-pointer"
          src="@/assets/assets-for-challenge/person.svg"
          alt="Person's avatar!"
        />
        <h1 class="font-primary font-semibold text-itemTitle-100 text-base">
          {{ props.transaction.voice }}
        </h1>
      </div>
      <transition name="delete">
        <slot></slot>
      </transition>
    </div>
    <p
      class="font-secondary font-normal max-w-2xl container mx-auto text-itemContent-100 text-base hover:cursor-pointer"
    >
      {{ props.transaction.text }}
    </p>
  </div>
</template>

<script setup>
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
