import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllIdeas } from "../../axios";

export const getAllOngoingIdeas = createAsyncThunk("allIdeas/ongoing", async () => {
	return await getAllIdeas("ongoing");
});

const initialState = {
	ongoingIdeas: [],
	loading: false,
	error: "",
};

export const allOngoingIdeasSlice = createSlice({
	name: "allOngoingIdeas",
	initialState,
	reducers: {
		addNewOngoingIdea: (state, action) => {
			state.ongoingIdeas.push({id: action.payload.id, title: action.payload.title, type: action.payload.type, status: "ongoing"});
		},
		removeOngoingIdea: (state, action) => {
			const deleteIndex = state.ongoingIdeas.indexOf(action.payload);
			state.ongoingIdeas.splice(deleteIndex, 1);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllOngoingIdeas.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllOngoingIdeas.fulfilled, (state, action) => {
				state.ongoingIdeas = action.payload;
				state.loading = false;
			})
			.addCase(getAllOngoingIdeas.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { addNewOngoingIdea, removeOngoingIdea } = allOngoingIdeasSlice.actions;
export default allOngoingIdeasSlice.reducer;
