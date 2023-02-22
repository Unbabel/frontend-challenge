import store from "../state/store";

export const topBarRouteActions = {
	transcriptions: [
		{
			id: 0,
			icon: "/src/assets/upload.svg",
			callback: () => {
				store.dispatch("sendTranscriptions");
			},
		},
		{
			id: 1,
			icon: "src/assets/fetch-document.svg",
			callback: () => {
				store.dispatch("fetchTranscriptions");
			},
		},
	],
	"not-found": [],
};
