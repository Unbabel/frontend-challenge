<template>
  <header class="bg-white w-full px-32 py-6 flex items-center justify-between">
    <h1 class="text-lg font-primary text-heading-100 font-medium">
      Transactions
    </h1>
    <div class="flex items-center gap-x-4">
      <button
        class="transform-none hover:transform transition -translate-y-1 ease-in-out"
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
});
</script>

<!-- don't you stress, you got it man, you the man! Put on GASHI 24 Hours. and hit these:
  - Figure out handling a fetch request and storing data in Pinia
  - Lay down transaction rows base components
  - Create CRUD functionality
-->
