const initialState = {
	listItems: [],
	isFetching: false,
	showModal: false,
	accessibilityOptions: {
		elder: false,
		colorBlindness: false,
	},
};

const storageKey = "transcriptionsAppState";

export const retrieveLocalState = () => {
	const state = JSON.parse(localStorage.getItem(storageKey));

	if (state) {
		return state;
	}

	return initialState;
};

export const saveToLocalStorage = (state) => {
	localStorage.setItem(storageKey, JSON.stringify(state));
};
