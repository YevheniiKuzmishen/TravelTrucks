import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    features: {
      AC: false,
      kitchen: false,
      bathroom: false,
      automatic: false,
      TV: false,
    },
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
  },
});

export const { setLocation, setType, toggleFeature } = filtersSlice.actions;
export default filtersSlice.reducer;
