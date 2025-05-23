import { createSlice } from "@reduxjs/toolkit";

interface MoneyState {
  round: number;
}

const initialState: MoneyState = {
  round: 0,
};

const roundSlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    setRound: (state, action) => {
      var reg = /^\d+$/;
      if (reg.test(action.payload)) {
        const roundNum = Math.min(Number(action.payload), 100);
        state.round = roundNum;
      }
    },
  },
});

export const { setRound } = roundSlice.actions;
export default roundSlice.reducer;
