import axiosInstance from "@/config/axiosInstace";
import { getpostsCons } from "@/constants/apiConstant";
import { getPostsThunkParams, postsStateType } from "@/types/postType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: postsStateType = {
  home: [],
  news: [],
  entertainment: [],
  politics: [],
  sports: [],
  articles: [],
  loading: true,
};

// ASYNC THUNK STARTS
export const getPosts = createAsyncThunk(
  "getPosts",
  async (params: getPostsThunkParams) => {
    const { page, catg } = params;
    try {
      const response = await axiosInstance.get(
        `${getpostsCons}?page=${page}?catg=${catg}`
      );
      if (response.data.success) {
        return {
          data: response.data.data,
          catg: catg,
        };
      }
    } catch (err: any) {
      console.log("Error Occured: " + err.message);
    }
  }
);
// ASYNC THUNK ENDS

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // Fetch Posts
      .addCase(getPosts.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload?.data) {
          state[payload.catg as keyof typeof initialState] = payload.data;
        }
        return state;
      }),
});

export default PostSlice;
