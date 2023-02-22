import Vue from "vue";
import Vuex from "vuex";

// actions
import * as actions from "./actions";

// Local Storage
import { retrieveLocalState, saveToLocalStorage } from "./localStorage";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		...retrieveLocalState(),
	},
	getters: {
		getListItems: (state) => state.listItems,
		isModalOpen: (state) => state.showModal,
		isColorBlindnessActive: (state) =>
			state.accessibilityOptions.colorBlindness,
		isElderModeActive: (state) => state.accessibilityOptions.elder,
	},
	mutations: {
		setListItems(state, listItems) {
			state.listItems = listItems;
			saveToLocalStorage(state);
		},
		addListItem(state) {
			const newId = state.listItems.at(-1)
				? state.listItems.at(-1).id + 1
				: 1;
			const newListItem = {
				id: newId,
				voice: "",
				text: "",
			};

			state.listItems.push(newListItem);
			saveToLocalStorage(state);
		},
		deleteListItem(state, itemId) {
			if (itemId) {
				state.listItems = state.listItems.filter(
					(item) => item.id.toString() !== itemId
				);

				saveToLocalStorage(state);
			}
		},
		editListItem(state, { itemId, key, value }) {
			const itemIdx = state.listItems.findIndex(
				(item) => item.id.toString() === itemId
			);

			if (
				itemIdx > -1 &&
				Object.keys(state.listItems[itemIdx]).includes(key)
			) {
				state.listItems[itemIdx][key] = value;
			}

			saveToLocalStorage(state);
		},
		toggleModal(state) {
			state.showModal = !state.showModal;
			saveToLocalStorage(state);
		},
		toggleAccessibilityOption(state, option) {
			if (Object.keys(state.accessibilityOptions).includes(option)) {
				state.accessibilityOptions[option] =
					!state.accessibilityOptions[option];

				saveToLocalStorage(state);
			}
		},
	},
	actions: actions.default,
});

export default store;
