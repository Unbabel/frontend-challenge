import { RouterLink } from 'vue-router'; import { RouterLink } from
'vue-router';

<template>
  <div
    class="w-full h-full flex flex-col my-20 items-center justify-evenly gap-5"
  >
    <h1
      class="text-4xl font-semibold font-secondary text-gray-600 hover:text-gray-500"
    >
      Opss! this page was not found 🙄
    </h1>
    <router-link
      class="text-2xl font-semibold font-secondary text-emerald-700 hover:text-emerald-500"
      to="/"
    >
      Back on track!
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
