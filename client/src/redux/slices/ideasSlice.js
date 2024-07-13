import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllIdeas } from "../../axios";
import moment from "moment";

export const getIdeas = createAsyncThunk("get/AllIdeas", async () => {
	const result = await getAllIdeas();
	return result;
});

const initialState = {
	ideas: [],
	achievements: null,
	loading: false,
	error: "",
};

function getAchievements (allIdeas) {
	const achievements = new Map();
	const finishedIdeas = allIdeas.filter(idea => idea.status === 'Finished');
	finishedIdeas.forEach(finishedIdea => {
		if (achievements.has(finishedIdea.type)) {
			const incrementValue = achievements.get(finishedIdea.type) + 1;
			achievements.set(finishedIdea.type, incrementValue);
		} else {
			achievements.set(finishedIdea.type, 1);
		}
	});
	return Object.fromEntries(achievements.entries());
}

export const ideasSlice = createSlice({
	name: "allFinishedIdeas",
	initialState,
	reducers: {
		changeIdeaStatus: (state, action) => {
			const index = state.ideas.findIndex(idea => idea.id === action.payload.id);
			if (action.payload.status === "Ongoing"){
				state.ideas[index].status = "Finished";
				state.ideas[index].when = moment().toJSON();
				state.achievements = getAchievements(state.ideas);
			} else {
				state.ideas[index].status = "Ongoing";
			}
		},
		recalculateAchievements: (state) => {
			state.achievements = getAchievements(state.ideas);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getIdeas.pending, (state) => {
				state.loading = true;
			})
			.addCase(getIdeas.fulfilled, (state, action) => {
				state.ideas = action.payload;
				state.achievements = getAchievements(action.payload);
				state.loading = false;
			})
			.addCase(getIdeas.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const {  changeIdeaStatus, recalculateAchievements } = ideasSlice.actions;
export default ideasSlice.reducer;
