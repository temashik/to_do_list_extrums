import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8000",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});

export async function storeIdeas(ideas) {
	const { data } = await instance.post("/storeIdeas", { ideas	});
	return data;
}

export async function getAllIdeas() {
	const { data } = await instance.get('/getAllIdeas');
	return data;
}

export default instance;