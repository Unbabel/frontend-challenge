<template>
  <main class="container mx-auto w-full h-full">
    <TheHeader :handleFetch="store.fetchTransactions" />
    <Loader v-if="store.loading" />
    <TransactionList v-else />
  </main>
</template>

<script setup>
import Loader from "../components/Loader.vue";
import TheHeader from "../components/TheHeader.vue";
import TransactionList from "../components/TransactionList.vue";

import { useTransactionStore } from "../stores/transactionStore";

const store = useTransactionStore();
</script>
