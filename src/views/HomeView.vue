<template>
  <main class="container mx-auto w-full h-full">
    <TheHeader :handleFetch="handleFetch" />
    <TransactionList :transactions="store.transactions" />
  </main>
</template>

<script setup>
import TheHeader from "../components/TheHeader.vue";
import TransactionList from "../components/TransactionList.vue";

import { useTransactionStore } from "../stores/transactionStore";

const store = useTransactionStore();

function handleFetch() {
  store.fetchTransactions();
}
</script>
