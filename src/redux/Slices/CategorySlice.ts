import axiosInstance from "@/config/axiosInstace";
import { getCategoriesCons } from "@/constants/apiConstant";
import { categoriesStateType } from "@/types/categoryType";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: categoriesStateType = {
  categories: [],
  loading: true,
};

// ASYNC THUNK STARTS
export const getCategories = createAsyncThunk("getCategories", async () => {
  try {
    const response = await axiosInstance.get(getCategoriesCons);

    if (response.data.success) {
      return response.data.data;
    }
  } catch (err: any) {
    console.log("Error Occured" + err.message);
  }
});
// ASYNC THUNK ENDS

// SLICE STARTS
const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(getCategories.pending, (state, { payload }) => {
        state.loading = true;
        return state;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        if (payload) {
          state.categories = payload;
          state.loading = false;
        }
        return state;
      }),
});
// SLICE ENDS

export default CategorySlice;
