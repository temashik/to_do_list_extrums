import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllIdeas } from "../../axios";

export const getAllFreshIdeas = createAsyncThunk("allIdeas/fresh", async () => {
	return await getAllIdeas("fresh");
});

const initialState = {
	freshIdeas: [],
	loading: false,
	error: "",
};

export const allFreshIdeasSlice = createSlice({
	name: "allFreshIdeas",
	initialState,
	reducers: {
		addNewFreshIdea: (state, action) => {
			state.freshIdeas.push(action.payload);
		},
		removeFreshIdea: (state, action) => {
			const deleteIndex = state.freshIdeas.indexOf(action.payload);
			state.freshIdeas.splice(deleteIndex, 1);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllFreshIdeas.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllFreshIdeas.fulfilled, (state, action) => {
				state.freshIdeas = action.payload;
				state.loading = false;
			})
			.addCase(getAllFreshIdeas.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { removeFreshIdea, addNewFreshIdea } = allFreshIdeasSlice.actions;
export default allFreshIdeasSlice.reducer;
