<template>
  <section class="container mx-auto w-2/3 my-6">
    <transition-group name="items" tag="ul">
      <li
        v-for="transaction in store.transactions"
        :key="transaction.id"
        @mouseenter="showByIndex = transaction"
        @mouseleave="showByIndex = null"
        class="border-b-4 bg-white rounded hover:-translate-y-[2.5px] hover:translate-x-[10px] transition-all duration-100 ease-in-out"
      >
        <TransactionItem :transaction="transaction">
          <button
            type="button"
            v-if="showByIndex === transaction"
            @click="removeTransaction"
          >
            <img
              class="cursor-pointer hover:-translate-y-[2.5px] hover:translate-x-[4px] hover:scale-110 transition-all duration-200 ease-in-out shadow"
              src="@/assets/assets-for-challenge/delete.svg"
              alt="v the doc!"
            />
          </button>
        </TransactionItem>
      </li>
    </transition-group>
    <div class="w-full flex flex-col items-center py-4 hover:cursor-pointer">
      <img
        v-if="store.transactions.length > 0"
        @click="newRow = !newRow"
        class="hover:cursor-pointer hover:-translate-y-[2.5px] transition-all duration-75 ease-in-out hover:shadow-sm"
        src="@/assets/assets-for-challenge/add-row.svg"
        alt="Add a new transaction row"
      />
    </div>
    <TransactionForm @add-transaction="addNewTransaction" v-if="newRow" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import TransactionItem from "./TransactionItem.vue";
import TransactionForm from "./TransactionForm.vue";

import { useTransactionStore } from "../stores/transactionStore";
const store = useTransactionStore();

const newRow = ref(false);
const showByIndex = ref(null);

/* Add new Transaction */
function addNewTransaction(newTransaction) {
  let lastItem = store.transactions.slice(-1);
  store.transactions.unshift({ id: lastItem[0].id + 1, ...newTransaction });
}
/* Remove Transaction */
function removeTransaction(transaction) {
  showByIndex.value === transaction;
  store.transactions.splice(transaction, 1);
}
</script>

<style scoped>
.items-enter-from {
  opacity: 0;
  transform: translateY("-20px");
}
.items-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.items-enter-active {
  transition: all 0.5s ease-in;
}

.items-leave-from {
  transform: translateY("-20px");
  opacity: 1;
}
.items-leave-to {
  transform: translateY(0);
  opacity: 0;
}
.items-leave-active {
  transition: all 0.5s ease-out;
}
</style>
