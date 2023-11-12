import axiosInstance from "@/config/axiosInstace";
import { postsStateType } from "@/types/postType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: postsStateType = {
  home: {
    posts: [],
    loading: false,
  },
  news: {
    posts: [],
    loading: false,
  },
  entertainment: {
    posts: [],
    loading: false,
  },
  politics: {
    posts: [],
    loading: false,
  },
  sports: {
    posts: [],
    loading: false,
  },
  articles: {
    posts: [],
    loading: false,
  },
};

// ASYNC THUNK STARTS
export const getPosts = createAsyncThunk("getPosts", async ({ catg, page }) => {
  const posts = await axiosInstance.post(catg);
});
// ASYNC THUNK ENDS

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // Fetch Posts
      .addCase(getPosts.pending, (state, { payload }) => {
        state.home.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.home.loading = false;
      }),
});

export default PostSlice.reducer;
