import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (
    { page = 1, limit = 4, location, form, AC, kitchen, TV, bathroom },
    { rejectWithValue }
  ) => {
    try {
      const params = {
        page,
        limit,
        ...(location && { location }),
        ...(form && { form }),
        ...(AC && { AC: true }),
        ...(kitchen && { kitchen: true }),
        ...(TV && { TV: true }),
        ...(bathroom && { bathroom: true }),
      };

      console.log("Fetching campers with params:", params);

      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        { params }
      );

      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.response.data || "Error fetching campers");
    }
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    page: 1,
    hasMore: true,
  },
  reducers: {
    resetCampers: (state) => {
      console.log("Resetting campers state");
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.meta.arg.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }

        state.hasMore = action.payload.length === 4;
        state.page += 1;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
