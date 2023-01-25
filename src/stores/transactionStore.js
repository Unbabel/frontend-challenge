import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transactions", {
  state: () => ({
    transactions: [],
    loading: false,
    error: null,
    res: null,
  }),

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
    async sendTransactions() {
      this.loading = true;
      try {
        const response = await fetch(
          "https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c",
          {
            method: "POST",
            body: JSON.stringify(this.transactions),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const result = await response.json();
        this.res = response;
        console.log(`response status: ${this.res} and result: ${result}`);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },

  /* Getters */
});
