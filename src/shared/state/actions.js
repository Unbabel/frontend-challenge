// API
import API from "../api/api";

// Utils
import { cleanListItemsObj } from "../utils/listItems";

const fetchTranscriptions = (context) => {
	API.getTranscriptions().then((transcriptions) => {
		context.commit("setListItems", transcriptions);
	});
};

const sendTranscriptions = (context) => {
	const formattedTranscriptions = cleanListItemsObj(
		context.getters.getListItems
	);
	API.postTranscriptions(formattedTranscriptions);
};

const addListItem = (context) => {
	context.commit("addListItem");
};

const deleteListItem = (context, itemId) => {
	context.commit("deleteListItem", itemId);
};

const editListItem = (context, { itemId, key, value }) => {
	context.commit("editListItem", { itemId, key, value });
};

const toggleModalVisibility = (context) => {
	context.commit("toggleModal");
};

const toggleAccessibilityOption = (context, option) => {
	context.commit("toggleAccessibilityOption", option);
};

export default {
	fetchTranscriptions,
	sendTranscriptions,
	addListItem,
	deleteListItem,
	editListItem,
	toggleModalVisibility,
	toggleAccessibilityOption,
};
