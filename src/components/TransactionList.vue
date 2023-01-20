<template>
  <section class="container mx-auto w-2/3 my-6 bg-white">
    <div
      class="border-b-4"
      v-for="transaction in props.transactions"
      :key="transaction.id"
    >
      <TransactionItem :transaction="transaction" />
    </div>
  </section>
</template>

<script setup>
import TransactionItem from "./TransactionItem.vue";

const props = defineProps({
  transactions: [],
});
</script>
