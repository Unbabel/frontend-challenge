<template>
  <TheHeader :handleFetch="fetchTransactions" :handlePost="sendTransactions" />
  <router-view />
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";

import { useTransactionStore } from "./stores/transactionStore";
const { fetchTransactions, sendTransactions } = useTransactionStore();
</script>
