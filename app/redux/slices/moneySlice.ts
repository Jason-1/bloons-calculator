import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

interface MoneyState {
  money: number;
}

const initialState: MoneyState = {
  money: 0,
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    setMoney: (state, action) => {
      var reg = /^\d+$/;
      if (reg.test(action.payload)) {
        state.money = Number(action.payload);
      }
    },
  },
});

export const { setMoney } = moneySlice.actions;
export default moneySlice.reducer;
