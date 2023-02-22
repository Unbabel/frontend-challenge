const URL = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";
const API = {
	getTranscriptions: async () => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		return await fetch(URL, requestOptions)
			.then((response) => response.json())
			.then((result) => result)
			.catch((error) => console.log("error", error));
	},
	postTranscriptions: async (body) => {
		var requestOptions = {
			method: "POST",
			redirect: "follow",
			body: body,
		};

		return await fetch(URL, requestOptions)
			.then((response) => response.json())
			.then((result) => result)
			.catch((error) => console.log("error", error));
	},
};

export default API;
