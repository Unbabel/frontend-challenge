<template>
  <section class="container mx-auto w-2/3 my-6">
    <ul>
      <li
        class="border-b-4 bg-white"
        v-for="transaction in props.transactions"
        :key="transaction.id"
      >
        <TransactionItem :transaction="transaction" />
      </li>
      <div class="w-full flex flex-col items-center py-4">
        <img
          v-if="props.transactions.length > 0"
          @click="newRow = !newRow"
          class="hover:cursor-pointer hover:-translate-y-[2.5px] transition-all duration-75 ease-in-out hover:shadow-sm"
          src="@/assets/assets-for-challenge/add-row.svg"
          alt="Add a new transaction row"
        />
      </div>
    </ul>
    <TransactionForm @add-transaction="addNewTransaction" v-if="newRow" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import TransactionItem from "./TransactionItem.vue";
import TransactionForm from "./TransactionForm.vue";

const newRow = ref(false);
const props = defineProps({
  transactions: {
    typpe: Array,
    required: true,
  },
});

function addNewTransaction(newTransaction) {
  console.log("The form inputs", newTransaction.value);
}
</script>
