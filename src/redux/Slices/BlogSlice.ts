import axiosInstance from "@/config/axiosInstace";
import { getBlogCons } from "@/constants/apiConstant";
import { blogStateType } from "@/types/blogType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBlog = createAsyncThunk(
  "getBlog",
  async ({ slug }: { slug: string }) => {
    try {
      const response = await axiosInstance.get(`${getBlogCons}?slug=${slug}`);
      if (response.status === 200) {
        return response.data.data;
      }
    } catch (err: any) {
      console.log("Error Occured: " + err.message);
    }
  }
);

const initialState: blogStateType = {
  blog: {
    _id: "string",
    post_id: "string",
    slug: "string",
    blog: "string",
  },
  loading: true,
};

const BlogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getBlog.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.blog = payload;
        return state;
      }),
  //   .addCase(actionName.rejected, (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload;
  //   }),
});

export default BlogSlice;
