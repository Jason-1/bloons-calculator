import { createSlice } from "@reduxjs/toolkit";

interface MonkeysState {
  name: string;
  topPath: number;
  middlePath: number;
  bottomPath: number;
}

const initialState: MonkeysState[] = [];

const monkeysSlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    addMonkey: (state, action) => {
      state.push({
        name: action.payload,
        topPath: 0,
        middlePath: 0,
        bottomPath: 0,
      });
    },

    removeMonkey: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addMonkey, removeMonkey } = monkeysSlice.actions;
export default monkeysSlice.reducer;
