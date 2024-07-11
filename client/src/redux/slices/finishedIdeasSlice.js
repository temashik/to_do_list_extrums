import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllIdeas } from "../../axios";

export const getAllFinishedIdeas = createAsyncThunk("allIdeas/finished", async () => {
	return await getAllIdeas("finished");
});

const initialState = {
	finishedIdeas: [],
	achievements: null,
	loading: false,
	error: "",
};

function getAchievements (allIdeas) {
	const achievements = new Map();
	allIdeas.forEach(idea => {
		if (achievements.has(idea.type)) {
			achievements[idea.type] = achievements[idea.type] + 1;
		} else {
			achievements.set(idea.type, 1);
		}
	});
	return Object.fromEntries(achievements.entries());
}

export const allFinishedIdeasSlice = createSlice({
	name: "allFinishedIdeas",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllFinishedIdeas.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllFinishedIdeas.fulfilled, (state, action) => {
				state.finishedIdeas = action.payload;
				state.achievements = getAchievements(action.payload);
				state.loading = false;
			})
			.addCase(getAllFinishedIdeas.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default allFinishedIdeasSlice.reducer;
