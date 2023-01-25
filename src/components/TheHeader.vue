<template>
  <header class="bg-white w-full px-32 py-6 flex items-center justify-between">
    <h1 class="font-primary text-lg text-heading-100 font-medium">
      Transactions
    </h1>
    <div class="flex items-center gap-x-4">
      <button
        class="transform-none hover:transform transition -translate-y-1 ease-in-out"
        @click="props.handlePost"
      >
        <img
          src="@/assets/assets-for-challenge/upload.svg"
          alt="Upload a doc!"
        />
      </button>
      <button
        class="transform-none hover:transform transition -translate-y-1 ease-in-out"
        @click="props.handleFetch"
      >
        <img
          src="@/assets/assets-for-challenge/fetch-document.svg"
          alt="Fetch a doc!"
        />
      </button>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  handleFetch: Function,
  handlePost: Function,
});
</script>
