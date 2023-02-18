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
		getListItems: (state) => {
			return state.listItems;
		},
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
	},
	actions: actions.default,
});

export default store;
