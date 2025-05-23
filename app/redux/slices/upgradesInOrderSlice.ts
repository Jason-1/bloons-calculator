import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upgradesInOrder: false,
};

const upgradesInOrderSlice = createSlice({
  name: "upgradesInOrderSlice",
  initialState: initialState,
  reducers: {
    toggleUpgradesInOrder: (state) => {
      state.upgradesInOrder = !state.upgradesInOrder;
    },
    setUpgradesInOrder: (state, action) => {
      state.upgradesInOrder = action.payload.ancestralParagon;
    },
  },
});

export const { toggleUpgradesInOrder, setUpgradesInOrder } =
  upgradesInOrderSlice.actions;
export default upgradesInOrderSlice.reducer;
