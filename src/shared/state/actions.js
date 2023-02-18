// API
import API from "../api/api";

const fetchTranscriptions = (context) => {
	API.getTranscriptions().then((transcriptions) => {
		context.commit("setListItems", transcriptions);
	});
};

const sendTranscriptions = (transcriptions) => {
	API.postTranscriptions(transcriptions);
};

const addListItem = (context) => {
	context.commit("addListItem");
};

const deleteListItem = (context, itemId) => {
	context.commit("deleteListItem", itemId);
};

export default {
	fetchTranscriptions,
	sendTranscriptions,
	addListItem,
	deleteListItem,
};
