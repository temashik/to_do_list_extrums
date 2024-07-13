import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8000",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});

export async function createIdea(title, type) {
	const { data } = await instance.post("/createIdea", {
		title,
		type,
		status: "fresh",
		when: null
	});
	return data;
}

export async function storeIdeas(ideas) {
	const { data } = await instance.post("/storeIdeas", { ideas	});
	return data;
}

// export async function getAllIdeas(status) {
// 	const { data } = await instance.get(`/getIdeas/${status}`);
// 	return data;
// }

export async function getAllIdeas() {
	const { data } = await instance.get('/getAllIdeas');
	return data;
}

export async function changeStatus(id, status, completionTime) {
	const { data } = await instance.patch(id, status, completionTime);
	return data;
}

export default instance;