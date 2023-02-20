import store from "../state/store";

export const topBarRouteActions = {
	transcriptions: [
		{
			icon: "/src/assets/upload.svg",
			callback: () => {
				store.dispatch("sendTranscriptions");
			},
		},
		{
			icon: "src/assets/fetch-document.svg",
			callback: () => {
				store.dispatch("fetchTranscriptions");
			},
		},
	],
	"not-found": [],
};
