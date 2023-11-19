import axiosInstance from "@/config/axiosInstace";
import { getBlogCons } from "@/constants/apiConstant";
import { blogStateType, getBlogThunkParams } from "@/types/blogType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBlog = createAsyncThunk(
  "getBlog",
  async ({ params }: { params: getBlogThunkParams }) => {
    try {
      const response = await axiosInstance.get(
        `${getBlogCons}?slug=${params.slug}`
      );

      console.log(response);

      return response.data;
    } catch (err: any) {
      console.log("Error Occured: " + err.message);
    }
  }
);

const initialState: blogStateType = {
  blogs: [],
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
      }),
  //   .addCase(actionName.rejected, (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload;
  //   }),
});

export default BlogSlice;
