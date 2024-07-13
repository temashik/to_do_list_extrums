import { configureStore } from "@reduxjs/toolkit"
import IdeasSlice from "./slices/ideasSlice";

export const store = configureStore({
	reducer: {
		ideasSlice: IdeasSlice,
	},
});