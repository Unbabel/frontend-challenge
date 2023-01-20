<template>
  <div class="p-10 flex flex-col items-start gap-3">
    <div class="flex items-center w-full justify-between px-3">
      <div class="flex items-center justify-start gap-3">
        <img
          class="hover:cursor-pointer"
          src="@/assets/assets-for-challenge/person.svg"
          alt="Person's avatar!"
        />
        <h1 class="font-secondary font-semibold text-xl">
          {{ props.transaction.voice }}
        </h1>
      </div>
      <img
        class="hover:cursor-pointer"
        src="@/assets/assets-for-challenge/delete.svg"
        alt="Delete the doc!"
      />
    </div>
    <p class="font-primary text-base max-w-2xl container mx-auto">
      {{ props.transaction.text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  transaction: {},
});
</script>
