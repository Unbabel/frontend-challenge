const initialState = {
	listItems: [],
	isFetching: false,
	showModal: false,
	accessibilityOptions: {
		elder: false,
		colorBlindness: false,
	},
};

const localStorageKey = "transcriptionsAppState";

export const retrieveLocalState = () => {
	const state = JSON.parse(localStorage.getItem(localStorageKey));

	if (state) {
		return state;
	}

	return initialState;
};

export const saveToLocalStorage = (state) => {
	localStorage.setItem(localStorageKey, JSON.stringify(state));
};
