import axiosInstance from "@/config/axiosInstace";
import categoryType from "@/types/categoryState";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// TYPE Declare Start
type initialStateType = {
  categories: categoryType[];
  status: "loading" | "success";
};
// TYPE Declare End

const initialState: initialStateType = {
  categories: [],
  status: "loading",
};

const CategorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    // invalidate: (state, { payload }) => {
    //   payload.forEach((item) => {
    //     state[item] = false;
    //   });
    // },
  },

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
  //   .addCase(getCategories.rejected, (state, { payload }) => {
  //     state.loading = false;
  //     state.error = payload;
  //   }),
});

// export const { invalidate } = sliceName.actions;
export default CategorySlice;
