import axiosInstance from "@/config/axiosInstace";
import { getCarouselCons } from "@/constants/apiConstant";
import { carouselType } from "@/types/carouselType";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: carouselType = {
  posts: [],
  loading: true,
};

// ASYNC THUNK STARTS
export const getCarousels = createAsyncThunk("getCarousels", async () => {
  try {
    const response = await axiosInstance.get(getCarouselCons);
    if (response.data.success) {
      return response.data.data;
    }
  } catch (err: any) {
    console.log("Error Occured" + err.message);
  }
});
// ASYNC THUNK ENDS

// SLICE STARTS
const CarouselSlice = createSlice({
  name: "carousels",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(getCarousels.pending, (state, { payload }) => {
        state.loading = true;
        return state;
      })
      .addCase(getCarousels.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = [];
        if (payload.length) {
          state.posts = payload;
        }

        return state;
      }),
});
// SLICE ENDS

export default CarouselSlice;
