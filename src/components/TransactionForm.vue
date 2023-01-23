<template>
  <div
    class="fixed top-0 left-0 right-0 w-full h-full z-50"
    :class="closed && 'hidden transition-all duration-75 ease-in-out'"
  >
    <div
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    ></div>
    <form
      @submit.prevent="handleSubmit(newTransaction)"
      class="relative top-20 mx-auto p-5 w-96 shadow-lg rounded-md bg-gray-100"
    >
      <div class="w-full py-2 border-b-2 border-gray-300">
        <h1 class="font-primary font-semibold text-lg text-gray-700">
          New Transaction
        </h1>
      </div>
      <div class="flex flex-col items-start my-4 py-2 gap-2">
        <label
          for="transaction-title"
          class="text-base font-secondary font-semibold text-gray-700 pl-2"
        >
          Add a voice title
        </label>
        <input
          v-model.lazy.trim="newTransaction.voice"
          type="text"
          id="transaction-title"
          :required="true"
          :maxlength="20"
          :minlength="5"
          class="w-full font-medium text-base text-gray-700 border-2 border-gray-400 rounded py-1 px-2 focus:outline-none focus:bg-gray-200"
        />
      </div>
      <div class="flex flex-col items-start my-2 py-2 gap-2">
        <label
          for="transaction-text"
          class="text-base font-secondary font-semibold text-gray-700 pl-2"
          >Add some text for this transaction</label
        >
        <textarea
          v-model.lazy.trim="newTransaction.text"
          id="transaction-text"
          rows="10"
          :maxlength="70"
          :minlength="20"
          :spellcheck="true"
          :autocomplete="false"
          :autocapitalize="true"
          :required="true"
          class="w-full border-2 font-medium text-base text-gray-700 border-gray-400 rounded py-1 px-2 focus:outline-none focus:bg-gray-200 resize-none"
        ></textarea>
      </div>
      <div class="flex items-center justify-end gap-2 m-2">
        <button
          class="p-2 rounded font-primary font-semibold text-gray-100 text-sm bg-gray-500 hover:bg-gray-300 hover:text-red-500 hover:-translate-y-[2px] transition-all duration-75 ease-out"
          type="button"
          @click="closed = !closed"
        >
          Close
        </button>
        <button
          class="p-2 rounded font-primary font-semibold text-gray-100 text-sm bg-gray-500 hover:bg-gray-300 hover:text-green-500 hover:-translate-y-[2px] transition-all duration-75 ease-out"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const closed = ref(false);
const newTransaction = ref({
  voice: "",
  text: "",
});

const emit = defineEmits(["add-transaction"]);

function handleSubmit() {
  emit("add-transaction", newTransaction.value);
  newTransaction.value = { voice: "", text: "" };
  closed.value = !closed.value;
}
</script>
