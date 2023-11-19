import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Slices/CategorySlice";
import PostSlice from "./Slices/PostSlice";
import BlogSlice from "./Slices/BlogSlice";

const Store = configureStore({
  reducer: {
    [CategorySlice.name]: CategorySlice.reducer,
    [PostSlice.name]: PostSlice.reducer,
    [BlogSlice.name]: BlogSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export default Store;
