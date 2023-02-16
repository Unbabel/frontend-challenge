export const topBarRouteActions = {
	transcriptions: [
		{
			icon: "/src/assets/upload.svg",
			callback: () => {
				console.log("I was clicked");
			},
		},
		{
			icon: "src/assets/fetch-document.svg",
			callback: () => {
				console.log("I was clicked");
			},
		},
	],
	"not-found": [],
};
