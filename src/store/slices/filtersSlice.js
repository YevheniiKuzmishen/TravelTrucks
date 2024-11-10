import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    equipment: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },
    clearFilters: (state) => {
      state.location = "";
      state.type = "";
      state.equipment = [];
    },
  },
});

export const { setLocation, setType, toggleEquipment, clearFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
