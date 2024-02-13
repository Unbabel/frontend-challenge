import { createStore } from 'vuex';
import axios from 'axios';

const mutationTypes = {
  SET_ITEMS: 'SET_ITEMS',
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  UPDATE_ITEM_ID: 'UPDATE_ITEM_ID',
  UPDATE_ITEM_UPLOAD_STATUS: 'UPDATE_ITEM_UPLOAD_STATUS',
  SET_HAS_CHANGES: 'SET_HAS_CHANGES',
};

export default createStore({
  state: {
    items: [],
    hasChanges: false,
  },
  mutations: {
    // Sets the 'items' state with new items fetched from an external source.
    // Each item is marked as 'isUploaded' to true indicating they are synced with the backend.
    [mutationTypes.SET_ITEMS](state, items) {
      state.items = items.map(item => ({ ...item, isUploaded: true }));
    },

    // Adds a new item to the 'items' array in the state and marks 'hasChanges' to true.
    // This indicates there's a pending change not yet synced with the backend.
    [mutationTypes.ADD_ITEM](state, item) {
      state.items.push({ ...item });
      state.hasChanges = true;
    },

    // Removes an item from the 'items' array by filtering out the item with the specified 'itemId'.
    // Marks 'hasChanges' to true indicating a change.
    [mutationTypes.DELETE_ITEM](state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId);
      state.hasChanges = true;
    },


    // Updates the ID of an item in the 'items' array. This is used after an item is uploaded
    // to sync its temporary local ID with the permanent ID assigned by the backend.
    [mutationTypes.UPDATE_ITEM_ID](state, { oldId, newId }) {
      const itemIndex = state.items.findIndex(item => item.id === oldId);
      if (itemIndex !== -1) {
        state.items[itemIndex].id = newId;
        state.items[itemIndex].isUploaded = true;
      }
    },

    // Updates the 'isUploaded' status of an item, used to track if the item is synced with the backend.
    [mutationTypes.UPDATE_ITEM_UPLOAD_STATUS](state, { itemId, isUploaded }) {
      const itemIndex = state.items.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        state.items[itemIndex].isUploaded = isUploaded;
      }
    },

    // Sets the 'hasChanges' state, indicating if there are changes not yet synced with the backend.
    [mutationTypes.SET_HAS_CHANGES](state, value) {
      state.hasChanges = value;
    },
  },
  actions: {
    // Fetches items from a remote API and commits them to the state using the SET_ITEMS mutation.
    async fetchItems({ commit }) {
      try {
        const response = await fetch('https://65c568dfe5b94dfca2e00221.mockapi.io/fe-challenge');
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const items = await response.json();
        commit(mutationTypes.SET_ITEMS, items);
      } catch (error) {
        console.error('Fetch items error:', error);
      }
    },

    // Adds a new item to the state. This is a straightforward action that directly commits to a mutation.
    addItem({ commit }, item) {
      commit(mutationTypes.ADD_ITEM, item);
    },

    // Deletes an item from both the local state and the backend.
    // If the item has not been uploaded, it is removed locally only.
    async deleteItem({ commit, state }, itemId) {
      const item = state.items.find(item => item.id === itemId);
      
      if (item && !item.isUploaded) {
        commit(mutationTypes.DELETE_ITEM, itemId);
        console.log("Local deletion successful", itemId);
        return;
      }
      
      try {
        await axios.delete(`https://65c568dfe5b94dfca2e00221.mockapi.io/fe-challenge/${itemId}`);
        commit(mutationTypes.DELETE_ITEM, itemId);
        console.log("Backend deletion successful", itemId);
      } catch (error) {
        console.error("Delete item error:", error);
      }
    },

    // Uploads a new item to the backend and updates its ID in the state with the response from the backend.
    async uploadItem({ commit }, item) {
      try {
        const response = await axios.post("https://65c568dfe5b94dfca2e00221.mockapi.io/fe-challenge", item);
        commit('UPDATE_ITEM_ID', { oldId: item.id, newId: response.data.id });
      } catch (error) {
        console.error("Upload error:", error);
      }
    },
    
    // Commits a mutation to update the upload status of an item.
    updateItemUploadStatus({ commit }, { itemId, isUploaded }) {
      commit(mutationTypes.UPDATE_ITEM_UPLOAD_STATUS, { itemId, isUploaded });
    },

    // Commits a mutation to update the 'hasChanges' state, indicating if there are pending changes.
    setHasChanges({ commit }, value) {
      commit(mutationTypes.SET_HAS_CHANGES, value);
    },
  }
});
