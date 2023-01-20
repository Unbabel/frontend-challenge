import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transactions", {
  state: () => ({
    transactions: [],
    transaction: null,
    loading: false,
    error: null,
  }),
  getters: {
    getTransactions(state) {
      return (authorId) =>
        state.transactions.filter(
          (transaction) => transaction.userId === authorId
        );
    },
  },
  actions: {
    async fetchTransactions() {
      this.loading = true;
      try {
        const res = await fetch(
          "https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c"
        );
        const data = await res.json();
        this.transactions = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchTransaction(id) {
      this.transaction = null;
      this.loading = true;
      try {
        this.transaction = await fetch(
          `https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c/${id}`
        ).then((res) => res.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
