import axiosInstance from "@/config/axiosInstace";
import { categoriesInitialType } from "@/types/categoryType";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ASYNC THUNK STARTS
export const getCategories = createAsyncThunk("getCategories", async () => {
  try {
    const response = await axiosInstance.get("api/category");

    if (response.data.success) {
      return response.data.data;
    }
  } catch (err: any) {
    console.log("Error Occured" + err.message);
  }
});
// ASYNC THUNK ENDS

const initialState: categoriesInitialType = {
  categories: [],
  status: "loading",
};

// SLICE STARTS
const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(getCategories.pending, (state, { payload }) => {
        state.status = "loading";
        return state;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        if (payload) {
          state.categories = payload;
          state.status = "success";
        }
        return state;
      }),
});
// SLICE ENDS

export default CategorySlice;
