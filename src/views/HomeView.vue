<template>
  <main class="container mx-auto w-full h-full">
    <Loader v-if="store.loading" />
    <BaseToast v-if="store.res == 200">
      <div
        class="px-3 text-sm font-medium font-secondary text-center text-slate-800"
      >
        Your request was sent successfully ✅
      </div>
    </BaseToast>
    <TransactionList v-else />
  </main>
</template>

<script setup>
import BaseToast from "../components/BaseToast.vue";
import Loader from "../components/Loader.vue";
import TransactionList from "../components/TransactionList.vue";

import { useTransactionStore } from "../stores/transactionStore";

const store = useTransactionStore();
</script>
