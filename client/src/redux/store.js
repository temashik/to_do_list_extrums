import { configureStore } from "@reduxjs/toolkit"
import FreshIdeasSlice from "./slices/freshIdeasSlice";
import OngoingIdeasSlice from "./slices/ongoingIdeasSlice";
import FinishedIdeasSlice from "./slices/finishedIdeasSlice";

export const store = configureStore({
	reducer: {
		freshIdeas: FreshIdeasSlice,
		ongoingIdeas: OngoingIdeasSlice,
		finishedIdeas: FinishedIdeasSlice,
	}
});